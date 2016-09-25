var pg = require('pg');
var squel = require('squel').useFlavour('postgres');
var query = require('pg-query');
var pg = require('pg');
var when = require('when');

query.connectionParameters = "postgres://test:test@localhost/test";

exports.SetWriterDetails = function(Name, Type, Staffing, Content, ImagePath, Callback){
	//Query inserting name and writer type into writers table and returning unique ID
	var writerCreate = squel.insert()
				.into("Writers")
				.set("WriterName", Name)
				.set("WriterType", Type)
				.returning('writerid');
	//executing creation of writer query, and createImage and createContent helper functions all at once
	return when.all([
		query(writerCreate),
		createImage(ImagePath),
		createContent(Content)
			]).spread(				//Taking all three unique IDs returned from queries and using them in the creation and execution of the final query
			function(results, pictureID, contentID){
				var detailsCreate = squel.insert()
					.into("WritersToDetails")
					.set("StaffingType", Staffing)
					.set("ContentID", contentID)
					.set("ImageID", pictureID)
					.set("WriterID", results[0].writerid);
				query(detailsCreate)
	});
}

exports.SetWorkshopDetails = function(WriterName, WorkshopName, WorkshopDescription){
	var workshopCreate = squel.insert()
						.into("Workshops")
						.set("WorkshopName", WorkshopName)
						.returning("WorkshopID")

	return when.all([
			query(workshopCreate),
			createContent(WorkshopDescription),
			selectWriterID(WriterName)
		]).spread(
			function(workshopResults, contentID, writerID){

				var writerToWorkshop = squel.insert()
										.into("WriterstoWorkshops")
										.set("WriterID", writerID)
										.set("WorkshopID", workshopResults[0].workshopid);

				var workshopsToContent = squel.insert()
											.into("WorkshopsToContent")
											.set("WorkshopID", workshopResults[0].workshopid)
											.set("ContentID", contentID)
				when.all([
						query(writerToWorkshop),
						query(workshopsToContent)
					]);
			}
		)
}

exports.SetCraftSession = function(WriterName, CraftSessionName, CraftSessionDescription){

	var craftSessionCreate = squel.insert()
								.into("Craftsessions")
								.set("CraftSessionName", CraftSessionName)
								.returning("CraftSessionID")
	return when.all([
			query(craftSessionCreate),
			selectWriterID(WriterName),
			createContent(CraftSessionDescription)
		]).spread(
		function(craftsessionResults, writerID, contentID){
			var writersToCraftSessions = squel.insert()
										.into("WritersToCraftSessions")
										.set("WriterID", writerID)
										.set("CraftSessionID", craftsessionResults[0].craftsessionid);
			var craftSessionsToContent = squel.update()
										.table("CraftSessions")
										.set("ContentID", contentID)
										.where("CraftSessionID = ?", craftsessionResults[0].craftsesionid);
			when.all([
					query(writersToCraftSessions),
					query(craftSessionsToContent)
				])
		});

}



//Takes image path and creates a new entry in image table
function createImage(ImagePath, callback){
	var pictureInsert = squel.insert()
			.into("Images")
			.set("ImagePath", ImagePath)
			.returning('ImageID');
	when.all([
		query(pictureInsert),
		]).then(
			function(results){
				return results[0].imageid;
			},
			function(err){
				callback(err);
			});
}


//Takes content description and creates a new entry in content table
function createContent(Content, callback){
	var contentInsert = squel.insert()
			.into("Content")
			.set("Description", Content)
			.returning('contentid');
	return when.all([
		query(contentInsert),
		]).then(
			function(results){
				return results[0].contentid;
			},
			function(err){
				callback(err);
			});
}

function selectWriterID(Name, callback){	
	var selectIDName = squel.select()
						.from("Writers")
						.field("WriterID")
						.where("WriterName = ?", Name);
	return when.all([
		query(selectIDName)
		]).then(function(result){
			return result[0][0].writerid;
		},
		function(err){
			callback(err);
		});
}



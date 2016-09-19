var pg = require('pg');
var squel = require('squel').useFlavour('postgres');
var query = require('pg-query');
var pg = require('pg');
var when = require('when');

query.connectionParameters = "postgres://test:test@localhost/test";

function SetWriterDetails(Name, Type, Staffing, Content, ImagePath, Callback){
	//Query inserting name and writer type into writers table and returning unique ID
	var writerCreate = squel.insert()
				.into("Writers")
				.set("WriterName", Name)
				.set("WriterType", Type)
				.returning('writerid');
	//executing creation of writer query, and createImage and createContent helper functions all at once
	when.all([
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

// function SetWorkshopDetails(WriterName, WorkshopName, WorkshopDescription){
// 	var workshopCreate = squel.insert()
// 						.into("Workshops")
// 						.set("WorkshopName", WorkshopName)
// 						.returning("WorkshopID")

// 	when.all([
// 			query(workshopCreate),
// 			createContent(WorkshopDescription)
// 			selectWriterID(WriterName)
// 		]).spread(
// 			function(workshopResults, contentID, writerID){
// 				//insert into WriterstoWorkshops
// 				//insert into WorkshopsToContent
// 			}
// 		)
// }



//Takes image path and creates a new entry in image table
function createImage(ImagePath){
	var pictureInsert = squel.insert()
			.into("Images")
			.set("ImagePath", ImagePath)
			.returning('ImageID');
	when.all([
		query(pictureInsert),
		]).spread(
			function(results){
				return results[0].imageid;
			}
		);
}


//Takes content description and creates a new entry in content table
function createContent(Content){
	var contentInsert = squel.insert()
			.into("Content")
			.set("Description", Content)
			.returning('contentid');
	when.all([
		query(contentInsert),
		]).spread(
			function(results){
				return results[0].contentid;
			}
		);
}

function selectWriterID(Name){	
	var selectIDName = squel.select()
						.from("Writers")
						.field("WriterID")
						.where("WriterName = ?", Name);
	when.all([
		query(selectIDName)
		]).spread(
		function(results){
			return results[0].writerid;
		});
}
selectWriterID("test");


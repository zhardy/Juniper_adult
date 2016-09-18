var pg = require('pg');
var squel = require('squel').useFlavour('postgres');
var when = require('when');


var connString = "postgres://test:zack@localhost/test";


function SetWriterDetails(Name, Type, Staffing, Content, Image, Callback){

	var query = squel.insert()
				.into("Writers")
				.set("WriterType", Type)
				.returning('writerid')
				.toString();

	console.log(query);
	// pg.connect(connString,  function (err, client, done){
	// 	var results = when.done(query);
	// 	console.log(results);
	// });


}

SetWriterDetails("Test", "Test", "Test", "test", "test");
var express = require('express');
var router = express.Router();
var db = require('../lib/DBAccess.js')

/* GET home page. */
router.get('/', function(req, res) {
  	res.render('index', { title: 'Express' });
});

router.post('/SetWriter', function(req, res){
	var WriterName = req.body.Name;
	var WriterType = req.body.Type;
	var WriterStaffing = req.body.Staffing;
	var WriterContent = req.body.Content;
	var ImagePath = req.body.ImagePath;
	db.SetWriterDetails(WriterName, WriterType, WriterStaffing, WriterContent, ImagePath).then(function(success){
		res.json({success:true})
	},
	function(err){
		res.json({success:false, error:err.toString()})
	});
});

router.post('/SetWorkshop', function(req, res){
	var WriterName = req.body.WriterName;
	var WorkshopName = req.body.WorkshopName;
	var WorkshopDescription = req.body.WorkshopDescription;
	db.SetWorkshopDetails(WriterName, WorkshopName, WorkshopDescription).then(function(success){
		res.json({success:true})
	},
	function(err){
		res.json({success:false, error:err.toString()});
	});
});

router.post('/SetCraftSession', function(req, res){
	var WriterName = req.body.WriterName;
	var CraftSessionName = req.body.SessionName;
	var CraftSessionDescription = req.body.SessionDescription;
	db.SetCraftSession(WriterName, CraftSessionName, CraftSessionDescription).then(function(success){
		res.json({success:true})
	},
	function(err){
		
		res.json({success:false, error:err.toString()});
	});
});

router.post('/SetReading', function(req, res){
	var WriterName = req.body.Name;
	var ReadingDate = req.body.Date;
	SetReading(WriterName, ReadingDate);
});

router.get('/GetWriters', function(req, res){
	var WriterArray = GetWriters();
	res.json({array: WriterArray});
});

router.get('/GetWriter', function(req, res){
	var Name = req.body.WriterName;
	GetWriter(Name).then(function(results){
		res.json({info: WriterInfo})	
	},
	function(err){
		res.json({error:err[0]})
	});
	
});

module.exports = router;

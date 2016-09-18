var express = require('express');
var router = express.Router();

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
	SetWriterDetails(WriterName, WriterType, WriterStaffing, WriterContent, ImagePath);
});

router.post('/SetWorkshop', function(req, res){
	var WriterName = req.body.WriterName;
	var WorkshopName = req.body.WorkshopName;
	var WorkshopDescription = req.body.WorkshopDescription;
	SetWorkshopDetails(WriterName, WorkshopName, WorkshopDescription);
});

router.post('/SetCraftSesssion', function(req, res){
	var WriterName = req.body.WriterName;
	var CraftSessionName = req.body.SessionName;
	var CraftSessionDescription = req.body.SessionDescription;
	SetCraftSesssion(WriterName, CraftSessionName, CraftSessionDescription);
});

router.post('/SetReading', function(req, res){
	var WriterName = req.body.Name;
	var ReadingDate = req.body.Date;
	SetCraftSesssion(WriterName, ReadingDate);
});

router.get('/GetWriters', function(req, res){
	var WriterArray = GetWriters();
	res.json({array: WriterArray});
});

router.get('/GetWriter', function(req, res){
	var Name = req.body.WriterName;
	var WriterInfo = GetWriter(Name);
	res.json({info: WriterInfo})
});

module.exports = router;

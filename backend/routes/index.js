var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  	res.render('index', { title: 'Express' });
});

router.post('/SetWriter', function(req, res){
	var WriterName = req.body.Name;
	var WriterStaffing = req.body.Staffing;
	var WriterContent = req.body.Content;
	var ImagePath = req.body.ImagePath;
	SetWriterDetails(WriterName, WriterStaffing, WriterContent, ImagePath);
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

module.exports = router;

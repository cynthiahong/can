var data = require("../../data.json");

module.exports = function (app) {
	app.get('/', function(req, res){
		res.render('index', data);
	});

	app.get('/browse', function(req, res){
		res.render('browse', data);
	});

	app.get('/ucsd', function(req,res){
		res.render('ucsd', data);
	});

	app.get('/about', function(req,res){
		res.render('about', data);
	});

	app.get('/faq', function(req,res){
		res.render('faq', data);
	});

	app.get('/contactus', function(req,res){
		res.render('contactus', data);
	});

	app.get('/student', function(req, res){
		res.render('student', data);
	});

	app.get('/done', function(req, res){
		res.render('done', data);
	});

	app.get('/stanford', function(req, res){
		res.render('stanford', data);
	});

	app.get('/harvard', function(req, res){
		res.render('harvard', data);
	});

	app.get('/appointments', function(req,res){
		res.render('appointments', data);

	});

	app.get('/studentbio', function(req,res){
		res.render('studentbio', data);

	});
}

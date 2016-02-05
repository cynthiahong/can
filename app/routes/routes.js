module.exports = function (app) {
	app.get('/', function(req, res){
		res.render('index');
	});

	app.get('/browse', function(req, res){
		res.render('browse');
	});

	app.get('/ucsd', function(req,res){
		res.render('ucsd');
	});

	app.get('/about', function(req,res){
		res.render('about');
	});

	app.get('/faq', function(req,res){
		res.render('faq');
	});

	app.get('/contactus', function(req,res){
		res.render('contactus');
	});

	app.get('/student', function(req, res){
		res.render('student');
	});

	app.get('/done', function(req, res){
		res.render('done');
	});
}
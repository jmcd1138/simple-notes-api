class Note {
  constructor(id, body) {
    this.id = id;
    this.body = body;
  }
}

var notes = [];

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
var port = process.env.PORT || 8080;

var router = express.Router();

router.route('/notes')
    .post(function(req, res) {
		
		var body = !req.body.body ? "" : req.body.body;
		var id = notes.length + 1;
		
		var note = new Note(id, body);
		
		notes.push(note);		
		res.json(note);        		
    })
	.get(function(req, res) {
		if(Object.keys(req.query).length === 0) {
			res.json(notes);
		} else if (!req.query.query) {
			res.send("Only query string 'query' is supported");
		} else {
			var queryStr = req.query.query;

			var matchingNotes = [];
			
			for(var i = 0; i < notes.length; i++){
				var re = new RegExp(queryStr,"gi");
				if(notes[i].body.match(re)){
					matchingNotes.push(notes[i]);
				}
			}
			
			if(matchingNotes.length < 1){
				res.send('Given ID does not exist');
			} else {
				res.json(matchingNotes);
			}
		}
		
    });
	
router.route('/notes/:id')
    .get(function(req, res) {
		var id = req.params.id;
		if(id < 1 || id > notes.length) {
			res.send('Given ID does not exist');
		} else {
			var note = notes[id - 1];
			res.json(note);
		}
		
    });

app.use('/api', router);
 
var server = app.listen(port);
console.log('Listening... ' + port);
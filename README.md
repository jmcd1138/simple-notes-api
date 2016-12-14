# simple-notes-api

Simple (very) RESTful note creation api using Node.js

SETUP

1. Install Node.js (https://nodejs.org/en/)
2. Run "setup.cmd" batch file to install needed modules and start localhost. All modules will be installed in the "api" folder.

USE

Example note: {"id" : 2, "body" : "Pick up milk!"}

*Only GET and POST methods are supported


Create new note (returns note): curl -i -H "Content-Type: application/json" -X POST -d "{\"body\" : \"Pick up milk!\"}" http://localhost:{port}/api/notes

Get existing note by id: curl -i -H "Content-Type: application/json" -X GET http://localhost:{port}/api/notes/{id}

Get all notes: curl -i -H "Content-Type: application/json" -X GET http://localhost:{port}/api/notes

Get all notes containing body keyword: curl -i -H "Content-Type: application/json" -X GET http://localhost:{port}/api/notes?query={keyword}


*More information about curl at https://curl.haxx.se/

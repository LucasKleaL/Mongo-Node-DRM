const Note = require ("./../model/Note");

class NoteController {
    constructor(app) {

        const note = new Note();

        app.get("/note/getById/:id", (req, res) => {
            let noteId = req.params.id;
            note.getById(noteId, function(error, result) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.get("/note/list/", (req, res) => {
            note.listNotes(function(error, result) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.get("/note/delete/:id", (req, res) => {
            let noteId = req.params.id;
            note.deleteById(noteId, function(error, result) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    console.log("Note "+noteId+" deleted.");
                    res.status(200).send(result);
                }
            });
        });

        app.post("/note/add", (req, res) => {
            let result = note.createNote(
                req.body.title,
                req.body.text,
                req.body.user
            );
            if (result) {
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        });

        app.post("/note/edit/:id", (req, res) => {
            let noteId = req.params.id;
            let noteEdit = {
                "title": req.body.title,
                "text": req.body.text,
                "user": req.body.user
            };
            let result = note.editById(noteId, noteEdit);
            if (result) {
                console.log("Note "+noteId+" edited.");
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        });

    }
}

module.exports = NoteController;
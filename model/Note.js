const { default: mongoose } = require("mongoose");
const NoteSchema = require("../schema/NoteSchema");
const User = require("./User");

class Note {

    async createNote(title, text, user) {
        const note = new NoteSchema({title: title, text: text, user: user})
        await note.save()
            .then(() => {console.log("New note saved " + note); return true;})
            .catch((error) => {console.error("Error while saving new note " + error); return false})
    }

    async getById(id, result) {
        let note = await mongoose.model("Note").findById(id).exec()
        result(null, note);
    }

    async listNotes(result) {
        let notes = await mongoose.model("Note").find();
        result(notes);
    }

    async deleteById(id, result) {
        let deleted = await mongoose.model("Note").findByIdAndDelete(id);
        result(null, deleted);
    }

    async editById(id, noteEdit) {
        await mongoose.model("Note").findByIdAndUpdate(id, noteEdit)
            .then((result) => {console.log(result); return true})
            .catch((error) => {console.log(error); return false});
    }
    
}

module.exports = Note;
const { default: mongoose } = require("mongoose");
const UserSchema = require("../schema/UserSchema");

class User {

    async createUser(username, email, password) {
        const user = new UserSchema({username: username, email: email, password: password, notes: []})
        await user.save()
            .then(() => {console.log("New user saved " + user); return true;})
            .catch((error) => {console.error("Error while saving new user " + error); return false})
    }

    async getById(id, result) {
        let user = await mongoose.model("User").findById(id).exec()
        result(null, user);
    }

    async listUsers(result) {
        let users = await mongoose.model("User").find();
        result(users);
    }

    async deleteById(id, result) {
        let deleted = await mongoose.model("User").findByIdAndDelete(id);
        result(null, deleted);
    }

    async editById(id, userEdit) {
        await mongoose.model("User").findByIdAndUpdate(id, userEdit)
            .then((result) => {console.log(result); return true})
            .catch((error) => {console.log(error); return false});
    }
    
}

module.exports = User;
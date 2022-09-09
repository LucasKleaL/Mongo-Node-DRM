const UserSchema = require("../schema/UserSchema");

class User {

    async createUser(username, email, password) {
        const user = new UserSchema({username: username, email: email, password: password, notes: []})
        await user.save()
            .then(() => console.log("New user saved " + user))
            .catch((error) => console.error("Error while saving new user " + error))
    }
    
}


module.exports = User;
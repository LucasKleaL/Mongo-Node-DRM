const User = require ("./../model/User");

class UserController {
    constructor(app) {

        const user = new User();

        app.get("/user/getById/:id", (req, res) => {
            let userId = req.params.id;
            user.getById(userId, function(error, result) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.get("/user/list/", (req, res) => {
            user.listUsers(function(error, result) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    res.status(200).send(result);
                }
            });
        });

        app.get("/user/delete/:id", (req, res) => {
            let userId = req.params.id;
            user.deleteById(userId, function(error, result) {
                if (error) {
                    res.status(500).send(error);
                } else {
                    console.log("User "+userId+" deleted.");
                    res.status(200).send(result);
                }
            });
        });

        app.post("/user/add", (req, res) => {
            let result = user.createUser(
                req.body.username,
                req.body.email,
                req.body.password
            );
            if (result) {
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        });

        app.post("/user/edit/:id", (req, res) => {
            let userId = req.params.id;
            let userEdit = {
                "username": req.body.username,
                "email": req.body.email,
                "password": req.body.password
            };
            let result = user.editById(userId, userEdit);
            if (result) {
                console.log("User "+userId+" edited.");
                res.sendStatus(200);
            } else {
                res.sendStatus(500);
            }
        });

    }
}

module.exports = UserController;
var port = 6969;
var express = require('express');
var bodyParser = require("body-parser");
var _ = require('lodash');

var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

//ToDo: Don't save here
var users = [
    {
        username: "admin",
        password: "admin",
        name: "Eboard Member",
    }
];

var authenticatedUser;

/*
 * Create a resource for /heartbeat to test Express
 
app.get("/heartbeat", function (req, res) {
    res.status(200).send({heartbeat: 'Still alive'});
});
*/

app.post("/login", function (req, res) {
    var user = req.body;

    if (!user || !user.username || !user.password) {
        res.status(422).send();
    }

    var usernameMatch = _.find(users, function (u) {
        return u.username === user.username;
    });

    if (!usernameMatch || usernameMatch.password !== user.password) {
        console.log("Didn't match");
        res.status(401).send();
    } else {
        console.log("Logged in with", user.username);
        authenticatedUser = _.omit(usernameMatch, 'password');
        res.status(200).send(authenticatedUser);
    }
});

app.post("/logout", function (req, res) {
    authenticatedUser = null;

    res.status(200).send();
});

app.get("/users/current", function (req, res) {
    if (authenticatedUser) {
        res.status(200).send(authenticatedUser);
    } else {
        res.status(404).send();
    }
});

app.listen(port);
console.log('Listening on: port ' + port);
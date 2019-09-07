var friendsArray = require("app/data/friends");

module.exports = function (app) {

    app.get("api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friendsArray", function (req, res) {
        var totalDifference = 0;
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userData = userData.name;
        var userScore = userData.scores;

        for (var i = 0; i < friendsArray.length; i++) {
            console.log(friendsArray[i])
            totalDifference = 0

        }
        friendsArray.push(userData);
        res.json(bestMatch);

    });
};
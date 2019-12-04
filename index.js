var express = require("express");
var app = express();
var fetch = require("node-fetch");
var port = 5500;

app.use(express.static('public'));

app.listen(port, function () {
    console.log('Server listening on localhost:%s', port);
});

app.get("/", function (req, res) {
    getData("https://digimon-api.herokuapp.com/api/digimon", (data) => {
        var limit = 1;
        var html = '<link rel="stylesheet" href="styles.css">';
        for (let i = 0; i < limit; i++) {
            html += "<section class='digi'>";
            html += `<p>${data[i].name}</p>`;
            html += `<img src='${data[i].img}'>`;
            html += "</section>";
        }
        res.send(html);
    })

});

function getData(url, callback) {
    fetch(url).then((Response) => Response.json())
        .then((data) => callback(data));
}
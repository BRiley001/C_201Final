var express = require("express");
var app = express();
var fetch = require("node-fetch");
var port = 5500;

//Global Variables
var diginum =0;
var pokenum =0;
var yuginum =0;

app.use(express.static(__dirname));

app.listen(port, function () {
    console.log('Server listening on localhost:%s', port);
});

app.get("/digimon", function (req, res) {
    getData("https://digimon-api.herokuapp.com/api/digimon", (data) => {
        let html = `<section class='digi'`;
        html += `<p>${data[diginum].name}</p>`;
        html += `<img src='${data[diginum].img}'>`;
        html +=`</section>`
        res.send(html);
    })    
});

app.get("/", function (req, res){
    let html= `<a src="index.html"></a>`;
    res.send(html);
})

app.get("/yugioh", function (req, res) {
    getData("", (data) => {
        res.send();
    })    
});

function getData(url, callback) {
    fetch(url).then((Response) => Response.json())
        .then((data) => callback(data));
}
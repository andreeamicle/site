const request = require('request');
const express = require('express');
const fs = require('fs');

var app = express();
let arr;

request({
    url: 'https://cryptopanic.com/api/posts/?auth_token=33bf0f043ad8d7a04f7e09b08903cc178ee6b7fe',
    json: true
}, (error, response, body) => {
        var toSend = "<ul>";
        for(var property in body.results)
            toSend += '<li>' + body.results[property].title + '</li>';
        toSend += '</ul>';

        fs.writeFile("file.txt", toSend, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });


    }
);


// app.get('/', (req, res) => {
//     //console.log(arr.results);
//     res.send(toSend);
// });
//
// app.listen(3000);
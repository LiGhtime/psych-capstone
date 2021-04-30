// This file defines the endpoints used in the backend, and calls the proper functions to handle data
// The return values of those functions are then parsed and sent along with the proper http status code

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var initialize = require('./initializeDB.js');
var userData = require('./userData.js');
var register = require('./registerUser.js');
var login = require('./login.js');
var tasks = require('./tasks.js');
var preassessment = require('./preassessment.js');
var postassessment = require('./postassessment.js');
var tokenHandler = require('./token.js');
var password = require('./passwordChange.js');
var fs = require("fs");
const path = require('path');

initialize.start()
    .then(res => console.log(res))
    .catch(err => console.log(err))

var app = express();

app.use(bodyParser.json());

//Ref: https://github.com/troygoode/node-cors-server/blob/master/server.js
const corsOptions = {
    origin: true,
    methods: ["GET","POST", "OPTIONS", "PUT"],
    credentials: true,
    maxAge: 3600,
    enablePreflight: true,
    preflightContinue: true
}

app.options("*", cors(corsOptions));

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});


// respond with "hello world" when a GET request is made to the homepage
// app.get("/", function(req, res) {
//   res.send('hello world')
// })
// app.get('/', cors(corsOptions), function(req, res) {
//     res.sendFile(path.join(__dirname+'/dist/spa/index.html'));
//     res.sendFile(path.join(__dirname, 'front-end/src/app/auth/login/login.page.html'))
//     res.sendFile(path.join(__dirname, '../index.html'))
//     var a = path.join(__dirname, '../index.html');
//     res.send(`This is ${a}`)
// })
// app.get("/", function(req, res, next) {
//     if(req.headers.authorization != undefined){
//         let auth = req.headers.authorization.split(' ')[1];
//         let [user, pass] = Buffer.from(auth, 'base64').toString().split(':');
//         res.send(user+' '+pass);
//         return;
//     }
//     res.status(403).send("No login provided");
// })

app.put("/register/", cors(corsOptions), function(req, res, next) {
// app.get("/", cors(corsOptions), function(req, res, next) {
    register.user(req.body)
        .then(result => res.send(result))
        .catch(err => {
            if(typeof(err) === 'string'){
                res.status(400).send(err);
            }
            else{
                res.status(500).send("Internal server error, register");
            }
        })
})

app.post("/login/", cors(corsOptions), function(req, res, next) {
    login.login(req.body)
        .then(result => res.send(result))
        .catch(err => {
            if(typeof(err) === 'string'){
                if(err == "Account not found"){
                    res.status(401).send(err);
                }
                else{
                    res.status(400).send(err);
                }
            }
            else{
                res.status(500).send("Internal server error, login");
            }
        })
})

// All endpoints past this point require a token to access

app.post("/tasks/", cors(corsOptions), function(req, res, next) {
    if(typeof(req.header('Authorization')) === 'undefined' || req.header('Authorization').split(' ').length < 2){
        res.status(401).send("Please provide a properly formatted token")
    }
    else{
       tokenHandler.verify(req.header('Authorization').split(' ')[1])
            .then(id => {
                tasks.upload(req.body, id)
                    .then(result => res.json({result:result}))
                    .catch(err => {
                        if(typeof(err) === 'string'){
                            res.status(400).send(err);
                        }
                        else{
                            res.status(500).send("Internal server error, tasks");
                        }
                    })
            })
            .catch(err => res.status(401).send("Invalid token")) 
    }
    
})

app.post("/userData/", cors(corsOptions), function(req, res, next) {
    if(typeof(req.header('Authorization')) === 'undefined' || req.header('Authorization').split(' ').length < 2){
        res.status(401).send("Please provide a properly formatted token")
    }
    else{
        tokenHandler.verify(req.header('Authorization').split(' ')[1])
            .then(id => {
                userData.userData(id)
                    .then(result => res.send(result))
                    .catch(err => {
                        if(typeof(err) === 'string'){
                            if(err == "Account not found"){
                                res.status(401).send(err);
                            }
                            else{
                                res.status(400).send(err);
                            }
                        }
                        else{
                            res.status(500).send("Internal server error, userData");
                        }
                    })
            })
            .catch(err => res.status(401).send("Invalid token"))
    } 
})

app.put("/checktoken/", cors(corsOptions), function(req, res, next){
    if(typeof(req.header('Authorization')) === 'undefined' || req.header('Authorization').split(' ').length < 2){
        res.status(401).send("Please provide a properly formatted token")
    }
    else{
        tokenHandler.verify(req.header('Authorization').split(' ')[1])
            .then(id => res.status(200).json({message: "Valid token"}))
            .catch(err => res.status(401).json({message: "Invalid token"}))
    }
})

app.put("/preassessment/", cors(corsOptions), function(req, res, next){
    if(typeof(req.header('Authorization')) === 'undefined' || req.header('Authorization').split(' ').length < 2){
        res.status(401).send("Please provide a properly formatted token")
    }
    else{
        tokenHandler.verify(req.header('Authorization').split(' ')[1])
            .then(id => {
                preassessment.upload(req.body, id)
                    .then(result => res.send(result))
                    .catch(err => {
                        if(typeof(err) === 'string'){
                            res.status(400).send(err);
                        }
                        else{
                            res.status(500).send("Internal server error, preassessment");
                        }
                    })
            })
            .catch(err => res.status(401).send("Invalid token"))
    }
})

app.put("/postassessment/", cors(corsOptions), function(req, res, next){
    if(typeof(req.header('Authorization')) === 'undefined' || req.header('Authorization').split(' ').length < 2){
        res.status(401).send("Please provide a properly formatted token")
    }
    else{
      tokenHandler.verify(req.header('Authorization').split(' ')[1])
        .then(id => {
            postassessment.upload(req.body, id)
                .then(result => res.send(result))
                .catch(err => {
                    if(typeof(err) === 'string'){
                        res.status(400).send(err);
                    }
                    else{
                        res.status(500).send("Internal server error, postassessment");
                    }
                })
        })
        .catch(err => res.status(401).send("Invalid token"))  
    } 
})

app.put("/changepassword/", cors(corsOptions), function(req, res, next){
    if(typeof(req.header('Authorization')) === 'undefined' || req.header('Authorization').split(' ').length < 2){
        res.status(401).send("Please provide a properly formatted token")
    }
    else{
        tokenHandler.verify(req.header('Authorization').split(' ')[1])
            .then(id => {
                password.update(req.body)   
                    .then(result => res.send(result))
                    .catch(err => {
                        if(typeof(err) === 'string'){
                            res.status(400).send(err);
                        }
                        else{
                            console.log(err);
                            res.status(500).send("Internal server error, changepassword");
                        }
                    })
            })
            .catch(err => res.status(401).send("Invalid token")) 
    }
})

app.put("/getTrainingFaces/", cors(corsOptions), function(req, res, next){
    if(typeof(req.header('Authorization')) === 'undefined' || req.header('Authorization').split(' ').length < 2){
        res.status(401).send("Please provide a properly formatted token")
    }
    else{
        tokenHandler.verify(req.header('Authorization').split(' ')[1])
            .then(id => {
                try {
                    var images = [];
                    for (var i = 0; i < 8; i++) {
                        var data = fs.readFileSync(`./faces/black/training/level-${req.body.level}/${i}.jpg`);
                        images.push(new Buffer(data, 'binary').toString('base64'));
                    }
                    res.status(200).send({images: images});
                } catch (err) {
                    res.status(500).send("Internal server error, getTrainingFaces");
                }
            })
            .catch(err => res.status(401).send("Invalid token")) 
    }
})

app.put("/getDailyAssessmentFaces/", cors(corsOptions), function(req, res, next){
    if(typeof(req.header('Authorization')) === 'undefined' || req.header('Authorization').split(' ').length < 2){
        res.status(401).send("Please provide a properly formatted token")
    }
    else{
        tokenHandler.verify(req.header('Authorization').split(' ')[1])
            .then(id => {
                try {
                    var images = [];
                    var faceNums = [];
                    for (var i = 0; i < 8; i++) { // Generate 8 random numbers between 0 and 30
                        var face = Math.floor(Math.random() * 30);
                        while (faceNums.indexOf(face) > -1) { // Account for repeats
                          face = Math.floor(Math.random() * 30);
                        }
                        faceNums.push(face);
                        var data = fs.readFileSync(`./faces/black/daily-assessment/${faceNums[i]}.jpg`);
                        images.push(new Buffer(data, 'binary').toString('base64'));
                    }
                    res.status(200).send({images: images});
                } catch (err) {
                    res.status(500).send("Internal server error, getDailyAssessmentFaces");
                }
            })
            .catch(err => res.status(401).send("Invalid token")) 
    }
})

app.put("/getPrePostAssessmentFaces/", cors(corsOptions), function(req, res, next){
    if(typeof(req.header('Authorization')) === 'undefined' || req.header('Authorization').split(' ').length < 2){
        res.status(401).send("Please provide a properly formatted token")
    }
    else{
        tokenHandler.verify(req.header('Authorization').split(' ')[1])
            .then(id => {
                try {
                    var images = [];
                    for (var i = 0; i < 30; i++) {
                        var data = fs.readFileSync(`./faces/black/pre-post-assessment/${i}.jpg`);
                        images.push(new Buffer(data, 'binary').toString('base64'));
                    }
                    res.status(200).send({images: images});
                } catch (err) {
                    res.status(500).send("Internal server error, getPrePostAssessmentFaces");
                }
            })
            .catch(err => res.status(401).send("Invalid token")) 
    }
})


app.put("/getWhosNewFaces/", cors(corsOptions), function(req, res, next){
    if(typeof(req.header('Authorization')) === 'undefined' || req.header('Authorization').split(' ').length < 2){
        res.status(401).send("Please provide a properly formatted token")
    }
    else{
        tokenHandler.verify(req.header('Authorization').split(' ')[1])
            .then(id => {
                try {
                    var images = [];
                    var afterFaces = 8 - req.body.level + (1 - Math.round(req.body.level/8));
                    var beforeFaces = 8 - afterFaces;
                    for (var i = 0; i < afterFaces; i++) {
                        var data = fs.readFileSync(`./faces/black/training/level-${req.body.level + 1}/${i}.jpg`);
                        images.push(new Buffer(data, 'binary').toString('base64'));
                    }
                    for (var i = 0; i < beforeFaces; i++) {
                        var data = fs.readFileSync(`./faces/black/training/level-${req.body.level - 1}/${i}.jpg`);
                        images.push(new Buffer(data, 'binary').toString('base64'));
                    }
                    res.status(200).send({images: images});
                } catch (err) {
                    console.log(err)
                    res.status(500).send("Internal server error, getWhosNewFaces");
                }
            })
            .catch(err => res.status(401).send("Invalid token")) 
    }
})

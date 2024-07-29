//Variable d'environement
const express = require('express');
const app = express();

const serverless = require("serverless-http");
const router = express.Router();

const PORT = 3000;
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

//Middleweere
app.use('/public',express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

//Method set
app.set('views', './client');
app.set('view engine', 'ejs');


//Print Page
router.get("/", (req, res)=>{
    res.render('index');
});

//Send mail
router.post("/", (req, res)=>{
    var subject = req.body.adrMail;
    var message = req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'hotmail',
        host: 'smtp-mail.outlook.com',
        secure: false,
        auth: {
            user: 'marsonmijoro@hotmail.com',
            pass: 'MIJoro3@'
        },
        tls: {
            ciphers: 'SSLv3',
        },
    });
    
    var mailOptions = {
        from : 'marsonmijoro@hotmail.com',
        to: 'marsonmijoro@gmail.com',
        subject: subject,
        text: message
    }
    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error)
            res.render('mailFailed');
        } else{
            console.log('Email sent' + info.response);
            res.render('mailSuccess');
        }
    })
    
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);

//listening on the port 3000
// app.listen(PORT, ()=>{
//     console.log(`listening in port ${PORT}`);
// });
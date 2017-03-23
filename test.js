'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    authMethod: 'LOGIN',
    auth: {
        user: 'cegdakalti@gmail.com',
        pass: 'root@123'
    }
});

// setup email data with unicode symbols
var mailOptions = {
    from: '"Fred Foo" <cegdakalti@gmail.com>', // sender address
    to: 'prabhakaran9397@gmail.com', // list of receivers
    subject: 'Hello!', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};
console.log('Sending!');
// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
    console.log('Sending');
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

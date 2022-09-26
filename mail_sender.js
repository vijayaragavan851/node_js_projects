const { info } = require("console");
var nodemailer  = require("nodemailer");

var transporter = nodemailer.createTransport(
    {
        service :'gmail',
        auth:{
            user:"vijayaragavan851@gmail.com",
            pass:"vijay851"
        }
    });

var mailoptions = 
{
    from:"vijayaragavan851@gmail.com",
    to: "vijayaragavan8221@gmail.com",
    subject:'sending Email using Node.js',
    text:'That was easy'
};

transporter.sendMail(mailoptions,function(err,info){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('Email sent'+info.response);
    }
});
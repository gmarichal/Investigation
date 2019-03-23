var nodemailer = require('nodemailer');


class Mailer {

sendMailBitch() {
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'marichalgaston@gmail.com',
      pass: 'Bichofruta24'
    }
  });
  
  var mailOptions = {
    from: 'marichalgaston@gmail.com',
    to: 'marichalgaston@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

};

}


export default Mailer;

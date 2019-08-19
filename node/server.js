// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const { metacall, metacall_load_from_file } = require('metacall');

require("dotenv").config();
const sgMail = require('@sendgrid/mail');
metacall_load_from_file('py', '../python/app.py');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = email => {
  const pdf = metacall('make_pdf', name);
  const msg = {
    to: email,
    from: 'pdftestapp@metacall.io',
    subject: 'Thanks for signing up to 🔥 Festyval !',
    html: '<strong>Welcome to the best Festival in Town !</strong><br />Your ticket is attached !',
    attachments: [
      {
        content: pdf.toString('base64'),
        filename: 'your-ticket.pdf',
        type: 'application/pdf',
        disposition: 'attachment',
        contentId: 'your-ticket'
      },
    ],
  };
  sgMail.send(msg);
}

module.exports = {
  sendEmail
}

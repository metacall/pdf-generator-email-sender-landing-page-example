const { metacall } = require('metacall');
const sgMail = require('@sendgrid/mail');

// Set up sendgrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Send email function
const send_email = (email) => {
  console.log('Sending email for: ' + email);
  // Call function from python
  const pdf = metacall('make_pdf', email.split('@').shift());
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
};

// Export send email function
module.exports = {
  send_email
}

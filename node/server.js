const { metacall, metacall_load_from_file } = require('metacall');
const sgMail = require('@sendgrid/mail');

// Load Python App
metacall_load_from_file('py', '../python/app.py');

// Set up sendgrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Send email function
const send_email = email => {
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
};

// Export send email function
module.exports = {
  send_email
}

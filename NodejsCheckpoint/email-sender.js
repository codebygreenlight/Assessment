// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object using default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'green@gmail.com', // Replace with your email
    pass: '123456'   // Replace with your email password or app password
  }
});

// Setup email data
const mailOptions = {
  from: 'green@gmail.com', // Sender address
  to: 'yellow@gmail.com',   // Receiver address (use your own email)
  subject: 'Test Email',        // Subject line
  text: 'Hello from Node.js using Nodemailer!' // Plain text body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

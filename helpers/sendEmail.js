const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: 'nastya.andrus@meta.ua',
    pass: META_PASSWORD,
  },
};
 
const transport = nodemailer.createTransport(nodemailerConfig);

// transport.sendMail(email)
//   .then(() => console.log('Email send success'))
//   .catch(error => console.log(error.message));

  // const email = {
  //   to: 'nastya.andrus@gmail.com',
  //   from: 'nastya.andrus@meta.ua',
  //   subject: 'Test email',
  //   html: '<h2><strong>TEST EMAIL</strong> from localhost:3000</h2>'
  // };

const sendEmail = async (data) => {
  const email = {...data, from: 'nastya.andrus@meta.ua'};
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
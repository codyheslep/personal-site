const router = require('express').Router()
var nodemailer = require('nodemailer');
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'codyheslep@gmail.com',
        pass: 'dulceetd98'
      }
    });

    let mailOptions = {
      from: 'codyheslep@gmail.com',
      to: 'codyheslep@gmail.com',
      subject: 'NEW WEB INQUIRY!',
      text: `name: ${req.body.name} \n email: ${req.body.email} \n phone: ${req.body.phone} \n about: ${req.body.about}`
    };

    transporter.sendMail(mailOptions)
    console.log(req.body)
    res.send('completed')
  } catch (err) {
    next(err)
  }
})

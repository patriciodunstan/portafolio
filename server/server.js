const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'patricio.dunstan@gmail.com',
      pass: 'Samael1987'
    }
  });

  const mailOptions = {
    from: 'patricio.dunstan@gmail.com',
    to: 'patriciodsdev@gmail.com',
    subject: 'Nuevo mensaje de contacto',
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.toString());
    } else {
      res.status(200).send('Correo enviado con éxito');
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor iniciado en el puerto 3001');
});

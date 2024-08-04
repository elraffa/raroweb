// api/sendEmail.js
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { name, email, persons } = req.body;

  const msg = {
    to: email,
    from: 'info@mktdigitalideas.com', // Use your verified SendGrid sender email
    subject: 'Confirmación de Reserva para RARO',
    text: `Hola ${name},\n\nTu reserva para ${persons} personas para el show de RARO se ha realizado con éxito. Te esperamos el 21 de septiembre a las 21 h. en Espacio Dynart (Vuelta de Obligado 3587, CABA)!\n\nSaludos,\nRARO`,
    html: `<p>Hola ${name},</p><p>Tu reserva para ${persons} personas para el show de RARO se ha realizado con éxito. Te esperamos el 21 de septiembre a las 21 h. en Espacio Dynart (Vuelta de Obligado 3587, CABA)!</p><p>Saludos,<br>RARO</p>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Confirmation email sent successfully' });
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    res.status(500).json({ error: 'Error sending confirmation email' });
  }
};
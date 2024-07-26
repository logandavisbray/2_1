const express = require("express");
const mailgun = require("mailgun-js");
require("dotenv").config();

const app = express();
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

app.use(express.json());

app.post("/api/submit", (req, res) => {
const { email } = req.body;
  const data = {from: "logadbproductions@gmail.com", to: email, subject: "Thank you for subscribing to Deakin!", text: "Thank you for subscribing to Deakin!", html: "<p>Thank you for subscribing to Deakin!</p>",};

  mg.messages().send(data, (error) => {
    if (error) {
      res.status(500).send("Error sending email");
    } else {
      res.status(200).send("Welcome email sent successfully");
    }
  });
});

app.listen(5000, () => {console.log(`Server running http://localhost:5000`);});

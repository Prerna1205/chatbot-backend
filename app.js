// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000; // You can change the port as needed

// Middleware
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors({
  allowedOrigins: [
      '*'
  ]
}));
// Dummy endpoint for handling chat messages
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  
  // Here you would process the message and generate a reply
  // For demonstration purposes, let's just echo back the message
  const reply = `You said: ${message}`;

  // Send the reply
  res.json({ message: reply });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

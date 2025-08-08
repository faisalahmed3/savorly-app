const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());




// Start server
app.listen(port, () => {
  console.log(`Savorly server is running on port ${port}`);
});

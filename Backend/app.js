require('dotenv').config();

const port = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use(express.static(('public')))
app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
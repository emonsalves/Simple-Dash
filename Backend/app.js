require('dotenv').config();

const port = process.env.PORT || 5000;
const morganBody = require('morgan-body')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
morganBody(app);

// Routes
app.use(express.static(('public')))
app.use('/api', require('./routes'))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
const express = require('express');
const app = express();
const cors = require('cors');
// Import doctors list
const doctorsList = require('./doctors.json');

app.use(cors());

// Get doctors list path
app.get('/api/getDoctors', (req, res)=>{
    res.json(doctorsList);
});

app.listen(3001);
console.log('Listening on localhost:3001');

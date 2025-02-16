const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 5003;

const userRoutes = require('./routes/userRoute');
const theatreRoutes = require('./routes/theatreRoutes');
const movieRoutes = require('./routes/movieRoutes');
const showRoutes = require('./routes/showRoutes');
const bookingRoutes = require('./routes/bookingRoute');


mongoose
.connect('mongodb://127.0.0.1:27017/BMS')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => { 
    console.log(err);
});

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/users', userRoutes);
app.use('/api/theatres', theatreRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/shows', showRoutes);
app.use('/api/bookings' , bookingRoutes );

app.listen(PORT, () => {
    console.log('Server is running');
});
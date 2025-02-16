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


const corsOptions = {
    origin: ["http://localhost:3000", "https://movie-booking-fe.vercel.app"],
    optionsSuccessStatus: 200,
    credentials: true, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.use(cors(corsOptions));


app.use(express.json())
app.use(express.urlencoded())

mongoose
.connect('mongodb+srv://mayank22236:Iudz0N2CY749srNU@cluster0.lahvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => { 
    console.log(err);
});

//app.use(cors());

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
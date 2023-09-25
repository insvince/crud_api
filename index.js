import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import env from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/author.js';
import bookRoute from './routes/book.js';

const app = express();
env.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb' }));
app.use(cors());

/* MONGODB CONNECT */
mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log('Connected Database!'))
    .catch(err => {
        console.log(err);
    });

/* ROUTES */
app.use('/api/auth', authRoute);
app.use('/api/book', bookRoute);

app.listen(process.env.PORT, () => {
    console.log('Server is running...');
});
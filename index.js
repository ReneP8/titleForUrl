import express, { json } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import titleRoute from './routes/title.js';
import dotenv from 'dotenv'
const app = express();

dotenv.config();

// enable middleware
app.use(morgan('common'));
app.use(json());
app.use(helmet());

// enable routes
app.use('/api', titleRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/', function (req, res) {
    res.send("Welcome to the API for titleForUrl!");
});
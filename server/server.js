import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';


const PORT = process.env.PORT || 4000;
const app = express();

//middleware
app.use(express.json());
app.use(cors());
//commect express to mongodb
await connectDB();

app.get('/', (req, res) => res.send('Api workingg'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
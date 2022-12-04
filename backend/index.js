import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();
// app.use(bodyParser.json({ limit: "30mb", extended: true})); DEPRECATED
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true})); DEPRECATED

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://reterandil:fgvqNisbIggLIn9j@mern-project.glxuhbn.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });  DEPRECATED
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false); DEPRECATED

// set up ======================================================================
import express from 'express';
import mongoose from 'mongoose'; // mongoose for mongodb
import dbConfig from './config/db.config'; // load the database config
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import noteRoutes from './routes/note.routes';

const port = process.env.PORT || 3000; // set the port
const app = express(); // create our app w/ express
app.use(cors());

// configuration ===============================================================
mongoose
  .connect(dbConfig.localUrl, {
    // Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
  });

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev')); // log every request to the console
}
app.use(express.json()); // parse application/json
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(cookieParser()); // parse cookie header and populate req.cookies with an object keyed by the cookie names
app.use(express.static('./public')); // set the static files location /public/img will be /img for users

// routes ======================================================================
app.use('/', noteRoutes);

// listen for requests (start app with node server.js) =========================
app.listen(port);
console.log('Server is listening on port ' + port);

export default app;

import * as express from 'express';
import { resolve } from 'path';
import { connect } from 'mongoose';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import { api } from "./api/api";

const app = express();
dotenv.config({
    path: __dirname + '/../.env'
});
connect(process.env.MONGODB_URI, { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

api(app);
app.use(express.static(resolve(__dirname, '../client/public')));
app.get('*', (req, res) => {
    res.sendFile(resolve(__dirname, '../client/public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log('Listening on port ' + port);
});
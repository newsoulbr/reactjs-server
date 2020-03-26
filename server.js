import express, { static } from 'express';
import { join } from 'path';
const app = express();

const port = process.env.SRV_PORT || 5000;
const buildFolder = process.env.SRV_FOLDER || 'build';

app.use(static(join(__dirname, buildFolder)));
app.get('/*', function (req, res) {
    res.sendFile(join(__dirname, buildFolder, 'index.html'));
});

app.listen(port);
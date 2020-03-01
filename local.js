/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const express = require("express");
const expressStaticGzip = require('express-static-gzip');
const helmet = require('helmet');
const path = require("path");
const myLocalHost = require("./host");

const staticFiles = expressStaticGzip(path.join(__dirname, 'public'));

const app = express();
app.use(helmet());
app.use(helmet.noCache());
app.use(staticFiles);
const port = 8080;
app.listen(port, myLocalHost.host);
app.use(staticFiles)
console.log(`App is listening on port ${port}`);

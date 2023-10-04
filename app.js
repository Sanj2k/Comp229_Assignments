const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');


app.use('/public/images/', express.static('./public/images'));
app.use('/public/', express.static('./public/'));

// route different pages
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/services', (req, res) => {
    res.render('services');
});
app.get('/projects', (req, res) => {
    res.render('projects');
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

let monitorArrayBeforeSlice = "";
let monitorArray = [];


const url = 'http://esptemp.duckdns.org:81/data.json';

const get_data = async url => {
    try {
        const response = await fetch(url);
        const json = await response.text();
        monitorArrayBeforeSlice = json;
        console.log(typeof (monitorArrayBeforeSlice))
        monitorArray = monitorArrayBeforeSlice.split(',');
        console.log(monitorArray)
    } catch (error) {
        console.log(error);
    }
};

get_data(url);



router.all('*', (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('login')
    }

    next();
});

/* GET home page. */
router.get('/', (req, res) => {



    res.render('admin', { title: 'Panel Admina', content: monitorArray });
});


module.exports = router;

const express = require('express');
const router = express.Router();

router.all('*', (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('login')
    }

    next();
});

/* GET home page. */
router.get('/', (req, res) => {
    console.log(req.session.admin)

    res.render('admin', { title: 'Panel Admina' });
});


module.exports = router;

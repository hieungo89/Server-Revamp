const express = require('express');
const router = express.Router();
const controllers = require('./controllers/reviews');

// own routes to controller here
router.get('/reviews/:id', controllers.getReview);



module.exports = router;
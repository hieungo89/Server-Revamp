const models = require('../models/reviews');

module.exports = {
  getReview: (req, res) => {
    console.log('controler side', req.params);
    models.getAllReviews(req.params)
    //  .then(result => console.log('result achieved: ', result.rows))
      .then(result => {
        res.status(200).send(result.rows)})
      .catch( err => console.log('controller retrieval failed: ', err));
  }
};
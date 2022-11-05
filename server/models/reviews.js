const db = require('../db/Postgres');

module.exports = {
  getAllReviews: ({ product_id }) => {
    const queryStr = `SELECT product_id,
      (SELECT json_agg(json_build_object(
        'review_id', reviews_id,
        'rating', rating,
        'date', to_timestamp(date/1000),
        'summary', summary,
        'body', body,
        'recommend', recommend,
        'reviewer_name', reviewer_name,
        'response', response,
        'helpfulness', helpfulness,
        'photos', (SELECT json_agg(url) FROM reviews_photos WHERE reviews_id=review_id)
        ))
      FROM reviews WHERE product_id=${product_id}) AS results
      FROM reviews WHERE product_id=${product_id}
      LIMIT 1;`;
    return db.query(queryStr)
      .then(result => { return result });
  },


  getMetaInfo: ({ product_id }) => {
    console.log('models: get Meta ', product_id)
    const queryStr = `SELECT product_id,
    (SELECT product_id
    FROM reviews WHERE product_id=${product_id}) AS ratings


    FROM characteristics WHERE product_id=${product_id};`
    return db.query(queryStr)
      .then(result => { return result });
  },


  addReview: ({ product_id, rating, summary, recommend, body, reviewer_name, reviewer_email, photos }) => {
    console.log('models: add Review ', body)
    const queryStr = `INSERT INTO reviews(product_id, rating, date, summary, recommend, reported, reviewer_name, reviewer_email, response, helpful)
      VALUES($1, )`

  },

  markHelpful: ({ review_id }) => {
    console.log('models: markHelpful ', review_id)
    const queryStr = `UPDATE reviews SET helpfulness = helpfulness + 1 WHERE reviews_id=${review_id}`
    return db.query(queryStr);
  },

  markReport: ({ review_id }) => {
    console.log('models: markReport ', review_id)
    const queryStr = `UPDATE reviews SET reported = true WHERE reviews_id=${review_id}`
    return db.query(queryStr);
  }

};
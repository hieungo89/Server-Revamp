const db = require('../db/Postgres');

module.exports = {
  getAllReviews: ({ product_id }) => {
    const queryStr = `SELECT product_id,
      (SELECT json_agg(json_build_object(
        'review_id', reviews_id,
        'rating', rating,
        'date', date,
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
    const queryStr = `SELECT json_build_object(
      'product_id', ${product_id},
      'ratings', (SELECT json_build_object(
        '1', (SELECT COUNT(rating) FROM reviews WHERE product_id=${product_id} AND rating=1),
        '2', (SELECT COUNT(rating) FROM reviews WHERE product_id=${product_id} AND rating=2),
        '3', (SELECT COUNT(rating) FROM reviews WHERE product_id=${product_id} AND rating=3),
        '4', (SELECT COUNT(rating) FROM reviews WHERE product_id=${product_id} AND rating=4),
        '5', (SELECT COUNT(rating) FROM reviews WHERE product_id=${product_id} AND rating=5)
        ) FROM reviews WHERE product_id=${product_id} LIMIT 1),
      'recommended', (SELECT json_build_object(
        'false', (SELECT COUNT(recommend) FROM reviews WHERE product_id=${product_id} AND recommend='false'),
        'true', (SELECT COUNT(recommend) FROM reviews WHERE product_id=${product_id} AND recommend='true')
        ) FROM reviews WHERE product_id=${product_id} LIMIT 1),
      'characteristics', (SELECT json_object_agg(
        name, (SELECT json_build_object(
          'id', characteristics_id,
          'value', (SELECT AVG(value) FROM characteristics_reviews WHERE characteristic_id=characteristics_id)
          ) FROM characteristics_reviews WHERE characteristic_id=characteristics_id LIMIT 1)
        ) FROM characteristics WHERE product_id=${product_id}
      )) AS meta;`
    return db.query(queryStr)
      .then(result => { return result });
  },

  addReview: ({ product_id, rating, summary, body, recommend, reviewer_name, reviewer_email }) => {
    const params = [product_id, rating, summary, body, recommend, reviewer_name, reviewer_email];
    const queryStr = `INSERT INTO reviews(product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
      VALUES($1, $2, now(), $3, $4, $5, false, $6, $7, null, 0)`
    return db.query(queryStr, params);
  },

  markHelpful: ({ review_id }) => {
    const queryStr = `UPDATE reviews SET helpfulness = helpfulness + 1 WHERE reviews_id=${review_id}`
    return db.query(queryStr);
  },

  markReport: ({ review_id }) => {
    const queryStr = `UPDATE reviews SET reported = true WHERE reviews_id=${review_id}`
    return db.query(queryStr);
  }
};
const db = require('../db/Postgres');

module.exports = {
  getAllReviews: ({ id }) => {
    // const query = `SELECT id, product_id, rating, date(to_timestamp(date/1000)), summary, body, recommend, reported, reviewer_name, response, helpfulness
    //   FROM reviews
    //   WHERE product_id=${id}
    //   ORDER BY helpfulness DESC, date DESC
    //   LIMIT 10;`;
    const query = `SELECT reviews_id, product_id, rating, to_timestamp(date/1000) AS date, summary, body, recommend, reported, reviewer_name, response, helpfulness, url AS photos
      FROM reviews
      LEFT JOIN reviews_photos ON reviews_id = review_id
      WHERE product_id=${id}
      ORDER BY date DESC
      LIMIT 10;`;
    return db.query(query)
      .then((result) => {return result})
  }



};
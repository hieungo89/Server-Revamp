import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // virtual users
  vus: 100,
  duration: '10s',
};


export default function () {
  // for (let id = 40341; id <= 40350; id++) {
  // http.get(`http://localhost:3001/reviews/${id}`);
  // http.put(`http://localhost:3001/reviews/5774954/helpful`)
  // sleep(1);
  // }

  http.get(`http://localhost:3001/reviews/40350`);
  sleep(1);
}


// export default function () {
//   // vu code: do things here...
// }
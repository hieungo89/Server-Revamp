<h1 align="center">
  Server Revamp - Reviews Feature
</h1>

## About the Project
> Our of 3 SWEs was tasked to replace a Monolithic API with 100 RPS max to Microservices API to scale at least 100 RPS per feature. Each SWE takes on one of the three features: Overview, Q&A, and Reviews. This section is about the Reviews feature.

## Tech Stack:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction">![-javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)</a>
<a href="https://expressjs.com/">![-express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)</a>
<a href="https://www.postgresql.org/">![-postgresql](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)</a>

### Testing/Deployment:

<a href="https://k6.io/docs/">![-k6](https://img.shields.io/badge/k6-7D64FF.svg?style=for-the-badge&logo=k6&logoColor=white)</a>
<a href="https://aws.amazon.com/">![-aws](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)</a>
<a href="https://loader.io/">![-loaderio](https://img.shields.io/badge/loader.io-20BEFF.svg?style=for-the-badge&logoColor=white)</a>
<a href="https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/">![-nginx-loadbalancer](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)</a>
<a href="https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/">![-nginx-loadbalancer](https://img.shields.io/badge/New%20Relic-008C99.svg?style=for-the-badge&logo=New-Relic&logoColor=white)</a>

## Data Collection

### Server configuration:
> The API server is setup using PostgreSQL instead of MongoDB to improve performance with query time due to massive data structure with over 10 million lines of data.

<!--* K6 -->

### K6 Local Testing:

<table>
  <tr>
    <td width="30%">
      <img src="https://user-images.githubusercontent.com/104481165/206306255-395eed46-f8bf-468b-b402-bb6a8d337fa3.png" alt="K6 local test">
    </td>
    <td>
      Local stress test with K6 to ensure decent query time before deployment.
    </td>
  </tr>
</table>
<p align="right">(<a href="#top">back to top</a>)</p>

<!--* DEPLOYMENT TESTING -->

### Deployment Testing:
> Deployed on AWS and stressed test with loader.io. Additional optimizations include load balancer using nginx and additional EC2 instances. New Relic was also used to test load and network capacity.

<table>
  <tr>
    <td width="33%">
      <img src="https://user-images.githubusercontent.com/104481165/206305741-4d536028-d9a4-41a4-9fe3-5fe7dcb2ee0d.png" alt="AWS">
    </td>
    <td width="33%">
      <img src="https://user-images.githubusercontent.com/104481165/206305813-7721327d-930b-43ac-9c89-ded68569da68.png" alt="AWS">
    </td>
    <td width="33%">
      <img src="https://user-images.githubusercontent.com/104481165/206305859-f29b2ceb-312c-4bb0-9f10-407641374c5a.png" alt="AWS">
    </td>
  </tr>
</table>

### Data Records:

<table>
  <tr>
    <td width="25%">
      <img src="https://user-images.githubusercontent.com/104481165/206281120-b0dcfe33-942e-4aa2-b484-d01d0b93e731.png" alt="AWS">
    </td>
    <td width="25%">
      <img src="https://user-images.githubusercontent.com/104481165/206282511-177d2a52-5304-4554-a616-71e5a6c6387e.png" alt="AWS">
    </td>
    <td width="25%">
      <img src="https://user-images.githubusercontent.com/104481165/206282673-05a3a554-7f38-4d56-b00e-2d9e804a1e9b.png" alt="AWS">
    </td>
    <td width="25%">
      <img src="https://user-images.githubusercontent.com/104481165/206282758-1cc601c1-f3a6-4547-bbcf-786b8ba363f2.png" alt="AWS">
    </td>
  </tr>
</table>
<p align="right">(<a href="#top">back to top</a>)</p>

### Analysis:
- With one server, 3000 RPS has an average of 5000ms query time with about 27,000 successful queries.
- With 2 servers and load balancer, the RSP query time decreases to 200ms but higher error rate of 64% while having an output of 32,000 successful queries.
- With cache system in place and 2 servers, the RPS has higher average query time of 1000ms and lower error rate of 36% with an output of 55,000 successful queries.
- The best performance is the final optimization with a cache system and 4 servers. The average query time dropped down to less than 100ms and 0% error rate with 90,000 successful queries.

### Conclusion:
The process of expanding an API service was tedious, painful, and at many times confusing, but with the successful outcome in mind, the journey was a blessing in providing me with such knowledge that I had acquired.

<p align="right">(<a href="#top">back to top</a>)</p>

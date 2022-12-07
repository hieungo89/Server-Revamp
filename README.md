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

<table>
  <tr>
    <td width="25%">
      <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS">
    </td>
    <td>
      Deployed on AWS for testing purposes.
    </td>
  </tr>
</table>
<table>
  <tr>
    <td width="50%">
      <img src="https://user-images.githubusercontent.com/104481165/206281120-b0dcfe33-942e-4aa2-b484-d01d0b93e731.png" alt="AWS">
    </td>
    <td>
      Deployed on AWS for testing purposes.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="https://user-images.githubusercontent.com/104481165/206282511-177d2a52-5304-4554-a616-71e5a6c6387e.png" alt="AWS">
    </td>
    <td>
      Deployed on AWS for testing purposes.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="https://user-images.githubusercontent.com/104481165/206282673-05a3a554-7f38-4d56-b00e-2d9e804a1e9b.png" alt="AWS">
    </td>
    <td>
      Deployed on AWS for testing purposes.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="https://user-images.githubusercontent.com/104481165/206282758-1cc601c1-f3a6-4547-bbcf-786b8ba363f2.png" alt="AWS">
    </td>
    <td>
      Deployed on AWS for testing purposes.
    </td>
  </tr>
</table>
<p align="right">(<a href="#top">back to top</a>)</p>

# simple authentication api

This is a tiny project I built for educational purposes to get started with node.js and express.js following the MVC (Model View Controller) design pattern. After running, a HTTP GET request containing a JSON object can be sent to the server (via postman for example) and a response is sent back after validating the login credentials.

## How to run
1. Clone this repository and make sure you have node.js installed (https://nodejs.org/en/download/package-manager)
2. Open a terminal in the directory you cloned this project into and type: npm run start app.js
3. Using Postman (https://www.postman.com/downloads/), send a GET request to the server via the URL http://localhost:4001/user/auth
   In the body of the request parse the login credentials in form of a JSON object:

   ```javascript
   {
    "username": "sith4ever",
    "password": "father"
   }

   ```
4. Now you should get a response displayed in Postman!

# nodejs_basic_app_REST_methods_3
Node JS Basic App With REST Get Methods


Creating REST Methods in Node JS App

1.	Open our Previous app
2.	https://github.com/StudentTW/nodejs_basic_app_mongodb_2
3.	Add this REST GET Methods before Server connection
4.	You can also clone this project and install the node modules using "npm install" to execute the same.

//First Method, We have already seen in previous apps
//Its a GET Method , which executes when app is listening at address "/" after app server address http://0.0.0.0:8080/
            
            app.get('/', function (req, res) {
              res.send('Hello world');
            });

//Second Method, We have already seen in previous apps
//Its a GET Method , which executes when app is listening at address "/AboutUs" after app server address //http://0.0.0.0:8080/AboutUs

              app.get('/AboutUs', function (req, res) {
                res.send('This is my Node JS App');
              });


//Third Method, We have already seen in previous apps
//Its a GET Method , which executes when app is listening at address "/Services" after app server address http://0.0.0.0:8080/Services

        app.get('/Services', function (req, res) {
          res.send('I Develop Node JS Apps');
        });


//Fourth Method, We have already seen in previous apps
//Its a GET Method , which executes when app is listening at address "/ContactUs" after app server address //http://0.0.0.0:8080/ContactUs

      app.get('/ContactUs', function (req, res) {
        res.send('You Can contact me at abcd@xyz.com');
      });
5.	I hope you have understood till now.
6.	In First part is 

        app.get('/’, 
        app.get('/Services'
        app.get('/AboutUs'

is a REST GET Method and address is “/” or “/AboutUs” any address you can give.

7.	Second part is after comma is 
 
        function (req, res) {
        res.send('You Can contact me at abcd@xyz.com');
        });

It is a function which will be executed when app lisents the address as given in first part
8.	Now open Browser and navigate to http://0.0.0.0:8080/
10.	Now open Browser and navigate to http://0.0.0.0:8080/AboutUs
11.	Check remaining GET Methods
12.	We will discuss Post REST Methods in next project


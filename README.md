# faker
Faker.js REST API

* Createa faker folder
> mkdir faker

* Go to faker folder
> cd faker

* Run below command to install json-server
> C:\dev\faker>npm install json-server --save

* Run below command to install faker
> C:\dev\faker>npm install faker --save

* Create a json file to store generated json data
> C:\dev\faker>mkdir database

> Create a blank products.json file inside database folder.

* Run below commad to generate fake json data (update generate.js file as per your requirement)
> C:\dev\faker>node generate.js

* Run below command to json-server and publish generated json data as REST service
> C:\dev\faker>npx json-server --watch database/products.json --port 3004

>  \{^_^}/ hi!

>  Loading database/products.json
 
>  Done

>  Resources

>  http://localhost:3004/products

 > Home
 
 > http://localhost:3004

 > Type s + enter at any time to create a snapshot of the database
 
 > Watching...
 
 
* These are the available API endpoints that we can consume using HttpClient:

>GET /products for getting the products,

>GET /products/<id> for getting a single product by id,

>POST /products for creating a new product,

>PUT /products/<id> for updating a product by id,

>PATCH /products/<id> for partially updating a product by id,

>DELETE /products/<id> for deleting a product by id.

>You can make use of the _page and _limit parameters to retrieve pages of data. In the Link header of the HTTP response you'll have the first, prev, next and last links.



* Ref: https://www.techiediaries.com/angular-mock-backend/

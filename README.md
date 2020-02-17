Validate Node version
---------------------
C:\tmp> node -v
v12.14.0

Validate npm version
--------------------
C:\tmp>npm -v
6.13.4

C:\tmp>mkdir faker

C:\tmp>cd faker

Install json-server Library
----------------------------
C:\tmp\faker>npm install json-server --save

npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN saveError ENOENT: no such file or directory, open 'C:\tmp\faker\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open 'C:\tmp\faker\package.json'
npm WARN faker No description
npm WARN faker No repository field.
npm WARN faker No README data
npm WARN faker No license field.

+ json-server@0.16.0
added 228 packages from 124 contributors and audited 449 packages in 15.638s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Install faker Library
----------------------
C:\tmp\faker>npm install faker --save

npm WARN saveError ENOENT: no such file or directory, open 'C:\tmp\faker\package.json'
npm WARN enoent ENOENT: no such file or directory, open 'C:\tmp\faker\package.json'
npm WARN faker No description
npm WARN faker No repository field.
npm WARN faker No README data
npm WARN faker No license field.

+ faker@4.1.0
added 1 package from 1 contributor and audited 1558 packages in 3.05s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


Create a generate.js file with below code, which one will execute to generate fake JSON data
---------------------------------------------------------------------------------------------
var faker = require('faker');
var fs = require('fs');

var database = { products : [] };

for(var i=1;i<=10;i++){
	database.products.push({
		id: i,
		name: faker.commerce.productName(),
		description: faker.lorem.sentences(),
		price: faker.commerce.price(),
		imageUrl: "http://source/unsplash.com/100*80/?product",
		quantity: faker.random.number()
	});
}

fs.writeFileSync('database/products.json', JSON.stringify(database));

Execute generate.js to generate fake JSON data
-----------------------------------------------
C:\tmp\faker>node generate.js

Run the json-server with port number 3004
------------------------------------------
C:\tmp\faker>npx json-server --watch database/products.json --port 3004

  \{^_^}/ hi!

  Loading database/products.json
  Done

  Resources
  http://localhost:3004/products

  Home
  http://localhost:3004

  Type s + enter at any time to create a snapshot of the database
  Watching...

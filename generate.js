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

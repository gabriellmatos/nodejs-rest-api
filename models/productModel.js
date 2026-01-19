const products = require('../data/products');
const { writeDataToFile } = require('../utils.js');

function findAll() {
	return new Promise((resolve, reject) => {
		resolve(products);
	});
}

function findById(id) {
	return new Promise((resolve, reject) => {
		const product = products.find((product) => product.id === id);
		resolve(product);
	});
}

function create(product) {
	return new Promise((resolve, reject) => {
		const newId = Number(products.at(products.length - 1).id) + 1;

		const newProduct = { id: newId, ...product };
		products.push(newProduct);
		writeDataToFile('./data/products.json', products);

		resolve(newProduct);
	});
}

module.exports = {
	findAll,
	findById,
	create,
};

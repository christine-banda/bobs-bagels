const assertEquals = require(`../test-framework`);
Basket = require(`../src/Basket`);
Item = require(`../src/Item`);

let basket, item, expectedOutput, result;

//ARRANGE
basket = new Basket();
item = new Item();
expectedOutput = 1;

//ACT
basket.addItem(item);

//ASSERT
//need to define the result to check the length
result = assertEquals(basket.items.length, expectedOutput);
console.log(`The result is ${result}`);
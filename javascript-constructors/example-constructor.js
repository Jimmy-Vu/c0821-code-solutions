function ExampleConstructor() {}

console.log('value of prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof of prototype of ExampleConstructor', typeof ExampleConstructor.prototype);

var anExampleConstructor = new ExampleConstructor();
console.log(anExampleConstructor);

var instanceOfResult = anExampleConstructor instanceof ExampleConstructor;
console.log(instanceOfResult);

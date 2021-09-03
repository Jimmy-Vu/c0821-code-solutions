var bookshelf = [
  {
    title: 'Swimmy The Fish: Welcome to the Danger Zone',
    author: 'Jimmy',
    isbn: '1242135346456'
  },
  {
    title: 'See You Space Cowboy',
    author: 'Jimmy',
    isbn: '32425235235'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    isbn: '9780061122415'
  }
];

console.log('Value of bookshelf:', bookshelf);
console.log('Data type of bookshelf:', typeof bookshelf);

console.log('Value of JSON bookshelf:', JSON.stringify(bookshelf));
console.log('Data type of JSON bookshelf:', typeof JSON.stringify(bookshelf));

var jsonStudent = '{"id":"1354320", "name":"Jimmy"}';
console.log('Value of jsonStudent:', jsonStudent);
console.log('Data type of jsonStudent:', typeof jsonStudent);

console.log('Value of jsonStudent parsed:', JSON.parse(jsonStudent));
console.log('Data type of jsonStudent parsed:', typeof JSON.parse(jsonStudent));

var student = {
  firstName: 'Jimmy',
  lastName: 'Vu',
  age: 24
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('Output of fullName:', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'IT Specialist';

console.log('Output of student.livesInIrvine:', student.livesInIrvine);
console.log('Output of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'GT-86',
  year: '2018'
};

vehicle.color = 'Dark Blue';
vehicle.isConvertible = false;

console.log('Output of vehicle.color:', vehicle.color);
console.log('Output of vehicle.isConvertible:', vehicle.isConvertible);
console.log('Output of vehicle object:', vehicle);

var pet = {
  name: 'Tiggy',
  type: 'Cat'
};

delete pet.name;
delete pet.type;

console.log('Output of pet object:', pet);

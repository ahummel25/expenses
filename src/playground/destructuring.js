// Object destructuring

// const person = {
//   name: 'Andrew',
//   age: 31,
//   location: {
//       city: 'St. Louis',
//       temp: 40
//   }
// };

// const { name = 'Tim', age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher


//Array Destructuring

const address = ['431 Yorkshire Place', 'St. Louis', 'MO', '63119'];

const [, city, state] = address;

console.log(`You are in ${city}, ${state}`);

const menu = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [item, , mediumPrice] = menu;

console.log(`A medium ${item} costs ${mediumPrice}`);
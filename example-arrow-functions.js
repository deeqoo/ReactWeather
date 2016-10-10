// var names = ['Mohammed', 'Jamac','Amal'];
// names.forEach(function(name){
//   console.log('forEach ', name)
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Mohammed'));

// var person = {
//   name: 'Rex',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     })
//   }
// }
//
// person.greet()

// challenge area

// function add(a, b){
//   return a + b
// }
//
// console.log(add(3,4));
// console.log(add(1,9));

// two different arrow
// one using curly braces
// and one using one liner no curly braces

var add = (a, b) => {
  return a + b
};

console.log(add(2,3));
console.log(add(5,3));

console.log('============================');

var add = (a, b) => a + b;
console.log(add(7,3));
console.log(add(8,3));

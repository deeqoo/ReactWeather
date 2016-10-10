// function getTempCallback (location, callback){
//   callback(undefined, 78);// success scenario
//   callback('City not found');
// }
//
// getTempCallback('London', function(err, temp){
//   if (err) {
//     console.log('error', err);
//   }else {
//     console.log('sucess', temp);
//   }
// });
//
// function getTempPromise (location){
//   return new Promise(function(resolve, reject){
//     setTimeout(function (){
//       resolve(79);
//       reject('City not found..');
//     }, 1000);
//   });
// }
//
// getTempPromise('London').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// });

// Challenge
 function addPromise(a, b){
   return new Promise(function(resolve, reject){
     if(typeof a === 'number' && typeof b === 'number'){
       resolve(a + b);
     }else {
       reject('A & B needs to be numbers');
     }
   });
 };

 addPromise(2,5).then(function(sum){
   console.log('success', sum);
 }).catch(function(err){
   console.log('error', err);
 });

 addPromise("Rex",5).then(function(sum){
   console.log('This should not show up!');
 }).catch(function(err){
   console.log('This should appear', err);
 });


 // console.log(addPromise(2,5));
 // console.log(addPromise(2,'hello'));

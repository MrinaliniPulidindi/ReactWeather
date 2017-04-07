// function getTempCallback(location, callback)
// {
//   callback(undefined,78);
//   callback('city not found');
// };
// getTempCallback('Jacksonville', function(err, temp) {
//   if(err)
//   {
//     console.log('error',err);
//   }
//   else {
//     console.log('success',temp);
//   }
// })
// function getTemPromise(location)
// {
//   return new Promise(function(resolve,reject)
//   {
//     resolve(78);
//     reject('city not found');
//   });
// }
//  getTemPromise('Philadelphia').then(function(temp,err)
//  {
//    console.log('promise success', temp);
//  }, function(err){
//       console.log('promise error', err);
//  });
function addNumbers(a,b)
{
  return new Promise(function(resolve,reject)
  {
    //if(typeof(a)=='number' && typeof(b)=='number')
    reject(a+b);
    // else
    // reject('not numbers');
  });
}
 addNumbers(3,2).then(function(err)
 {
   console.log('promise error', err);
 }, function(temp){
      console.log('promise success', temp);
 });

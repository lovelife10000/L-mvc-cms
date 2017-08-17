/**
 * Created by v_lljunli on 2017/8/17.
 */
const fs=require('fs');
const co=require('co');
// fs.readFile('./index.js', (err, data) => {
//   if (err) throw err;
// console.log(data);
//   fs.readFile('./package.json',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
//   });
// });


// var gen = function* (){
//   var f1 = yield fs.readFile('./index.js');
//   var f2 = yield fs.readFile('./package.json');
//   console.log(f1.toString());
//   console.log(f2.toString());
// };
// console.log(gen().next());
// // co(gen).then(function (){
// //   console.log('Generator 函数执行完成');
// // });
//
// co(function* () {
//   var result = yield Promise.resolve(true);
//
//   return result;
// }).then(function (value) {
//   console.log(value);
// }, function (err) {
//   console.error(err.stack);
// });



co(function *(){
  // yield any promise
  var result = yield Promise.resolve(true);
}).catch(onerror);

co(function *(){
  // resolve multiple promises in parallel
  var a = Promise.resolve(1);
  var b = Promise.resolve(2);
  var c = Promise.resolve(3);
  var res = yield [a, b, c];
  console.log(res);
  // => [1, 2, 3]
}).catch(onerror);

// errors can be try/catched
co(function *(){
  try {
    yield Promise.reject(new Error('boom'));
  } catch (err) {
    console.error(err.message); // "boom"
  }
}).catch(onerror);

function onerror(err) {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!!
  console.error(err.stack);
}


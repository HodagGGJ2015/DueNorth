// if (Meteor.isServer) {
//   var Fiber = Npm.require('fibers');
 
//   function async (cb) {
//     console.log("callAsync.async")
//     CBot.insert({test:true})
//     // Meteor.setTimeout(function () {
//     //   console.log("callAsync.inner")
//     //   cb(null, 'hello');
//     // }, 3000);
//   }
 
//   Meteor.methods({
//     callAsync: function (msg) {
//       CBotServer.write(msg)
//       console.log("callAsync")
//       var fiber = Fiber.current;
 
//       // var fence = Meteor._CurrentWriteFence.get()
//       //   , handle = fence && fence.beginWrite();
 
//       async(function (err, res) {
//         // handle && handle.committed();
//         console.log("callAsync.cb")
//         fiber.run(res);
//       });
 
//       return Fiber.yield();
//     }
//   });
// }
 
// if (Meteor.isClient) {
//   testCallAsync = function (msg) {
//     Meteor.call('callAsync', msg, function (err, res) {
//       if (err) console.log(err);
//       else console.log('response: ', res);
//     });
//   };
// }
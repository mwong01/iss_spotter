const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('66.207.199.230', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned Coordinates:' , coords);
// });

fetchISSFlyOverTimes('66.207.199.230', (error, flyover) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Flyby times as follows:' , flyover);
});
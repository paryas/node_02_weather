const request = require('request');

request(
  {
    url:
      'https://www.mapquestapi.com/geocoding/v1/address?key=UP93hCAokvYMHPRZ1z9iuYalIYUkGAGp&location=1301%20lombard%20street%20philadelphia',
    json: true
  },
  (error, response, body) => {
    console.log(`error ${JSON.stringify(error, undefined, 2)}`);
    console.log(`response ${JSON.stringify(response, undefined, 2)}`);
    console.log(`body ${JSON.stringify(body, undefined, 2)}`);
  }
);

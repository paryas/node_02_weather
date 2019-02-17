const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodeAddress = encodeURIComponent(address);

    request(
      {
        url: `https://www.mapquestapi.com/geocoding/v1/address?key=UP93hCAokvYMHPRZ1z9iuYalIYUkGAGp&location=${encodeAddress}`,
        json: true
      },
      (error, response, body) => {
        if (error) {
          reject('Unable to connect to mapquestapi Service');
        } else if (body.info.statuscode === 'ZERO_RESULTS') {
          reject('Unable to find that address');
        } else {
          resolve({
            address: body.results[0].providedLocation.location,
            latitude: body.results[0].locations[0].latLng.lat,
            longitude: body.results[0].locations[0].latLng.lng
          });
        }
      }
    );
  });
};

geocodeAddress('91006')
  .then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

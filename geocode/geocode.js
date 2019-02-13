const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodeAddress = encodeURIComponent(address);

  request(
    {
      url: `https://www.mapquestapi.com/geocoding/v1/address?key=UP93hCAokvYMHPRZ1z9iuYalIYUkGAGp&location=${encodeAddress}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback('Unable to connect to Google Service');
      }
      // else if (body.info.statuscode === 0) {
      // callback('Unable to find that address');

      // }
      else {
        callback(undefined, {
          address: body.results[0].providedLocation.location,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;

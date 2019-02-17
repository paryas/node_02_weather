const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h').argv;

var encodeAddress = encodeURIComponent(argv.address);

var geocodeUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=UP93hCAokvYMHPRZ1z9iuYalIYUkGAGp&location=${encodeAddress}`;

axios
  .get(geocodeUrl)
  .then((response) => {
    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;

    var weatherUrl = `https://api.darksky.net/forecast/24379622026b65e490cf258613c2cd92/${lat},${lng}`;

    console.log(response.data.results[0].providedLocation.location);

    return axios.get(weatherUrl);
  })
  .then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(
      `It's currently ${temperature}. It feels like ${apparentTemperature}`
    );
  })
  .catch((e) => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers.');
    } else {
      console.log(e);
    }
  });

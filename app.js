const request = require('postman-request');
const geocode = require('./utils/geocode.js');
const foreCast = require('./utils/forecast.js');

geocode("52.66.94.141", (error,data) => {
  if (error) {
    return console.log(error);
  }
    foreCast( data.latitude,data.longitude, (error, data) => {
        console.log(data);
    })

    console.log(data.city);
})


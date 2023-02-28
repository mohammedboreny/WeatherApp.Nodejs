const request = require('postman-request');

const geocode = (ip, callback) => {
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=0918b191bb8c4b4db93da286782d031c&ip=${ip}`
    console.log(url);
    request({ url: url, json: true }, (error,res) => {
        if (error) {
            callback('unable to connect to location')
        }
        else if (res.body.length == 0) {
            callback('location service is unavailable')
        }
        else {
            const longitude = res.body.longitude
            const latitude = res.body.latitude
            const data = {
                latitude: latitude,
                longitude: longitude,
                country_name:res.body.country_name
            }
            callback(undefined,data)
        }
    })
}

module.exports=geocode
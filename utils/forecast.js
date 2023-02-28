const request = require('postman-request');


const forCast = (latitude,longitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=53a115dc6431f8c1566ff5031327e3a5&query=${latitude},${longitude}&units=f`
    request({ url: url, json: true }, (error,res) => {
        if (error) {
            callback('Location is not recognized')
        }
        else if (res.body.error) {
            callback('Server Error while retriving the information')
        }
        else {
            callback(undefined,res.body.current.is_day)
        }
    })
}


module.exports=forCast
const request = require('request')

const forecast = (lat,long,cb) => {
    const url = 'https://api.darksky.net/forecast/09abd827765cddb7872d14ad2c713afc/'+lat+','+long;
    request({url:url,json:true},(error,response)=>{
        if (error) {
            cb('Unable to connect to weather service!',undefined)
        } else if (response.body.error) {
            cb('Unable to find location',undefined)
        } else {
            cb(undefined , response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
        }
    })
}

module.exports = forecast
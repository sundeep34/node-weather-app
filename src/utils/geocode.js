const request = require('request');

const geocode = (address,cb) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent (address) + '.json?access_token=pk.eyJ1Ijoic3VuZGVlcDM0IiwiYSI6ImNqdTQ1NGhwMDBycWg0NHBlNWRhcG1qejkifQ.Bhei8Ax6oah4ptkhrMu6yg&limit=1';
    request({url : url,json:true},(error,response)=>{
        if (error) {
            cb('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            cb('Unable to find location. Try another search.', undefined)
        } else {
            cb(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
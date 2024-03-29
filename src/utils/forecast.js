const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=328a2950b272dfb2dc9ce34c9cfbf79e&query='+latitude+','+longitude
    request ( { url, json:true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to Weather Services!', undefined)
        }else if (body.error){
            callback('Unable to find location.', undefined)
        }else {
            callback(undefined, body.current.weather_descriptions[0]+ '. It is cuurently '+body.current.temperature+ ' degrees out. It feels like '+ body.current.feelslike+ ' degrees out.')
        }
    })

}
module.exports = forecast
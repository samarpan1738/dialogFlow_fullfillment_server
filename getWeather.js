require('dotenv').config()
const axios = require('axios');
const APIKEY = process.env.OPENWEATHER_API_KEY
// console.log(APIKEY)
const getWeather = location => {
    return new Promise((resolve, reject, error) => {
        let result = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${APIKEY}`).then(response => {
            if (response.data.cod === 200)
                resolve(`Right now its ${response.data.main.temp} degrees with ${response.data.weather[0].description}`)

        }).catch((error) => {
            if (error.response.data.cod)
                resolve(`City not found mah boiii`);
        }).finally(() => console.log("Request completed"));
        //resolve(result)
    })
}
exports = module.exports = {
    getWeather
};
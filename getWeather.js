const axios = require('axios');
const APIKEY = '852856acadefbc0c221096b940aab3b6'
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
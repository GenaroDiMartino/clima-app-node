const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a7fb253e7be81460e8338b0e66fb65e7&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
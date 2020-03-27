const axios = require("axios");

const BASE_URL = `https://yodish.p.rapidapi.com`

module.exports = {
    translate: (text) => axios({
        method:"POST",
        url : BASE_URL + `/yoda.json`,
        headers: {
            "content-type":"application/x-www-form-urlencoded",
            "x-rapidapi-host":"yodish.p.rapidapi.com",
            "x-rapidapi-key": process.env.RAPIDAPI_KEY
        },
        params: {
            text
        }
    })
}

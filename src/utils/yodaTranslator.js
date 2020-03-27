const axios = require("axios");

module.exports = {
    translate: (text) => axios({
        method:"POST",
        url :`https://yodish.p.rapidapi.com/yoda.json`,
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

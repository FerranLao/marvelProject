const axios = require("axios")
const md5 = require("md5")

const instance = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public",

})
const { MARVEL_KEY, MARVEL_SECRET } = process.env
const hash = () => {
    const now = new Date().getTime()
    return md5(now + MARVEL_SECRET + MARVEL_KEY)
}
instance.interceptors.request.use(config => {
    config.params = { ...config.params, apikey: process.env.MARVEL_KEY, ts: new Date().getTime(), hash: hash() }
    return config
}
)
module.exports = instance
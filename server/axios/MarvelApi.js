const instance = require("./")

module.exports = class MarvelApi {
    static async  getList(filters, type) {
        try {
            const { data } = await instance.get(`/${type}`, {
                params: filters
            })
            return data.data
        } catch (e) {
            throw e.response
        }
    }
}

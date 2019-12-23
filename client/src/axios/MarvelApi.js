import instance from "./"

export default class MarvelApi {
    static async  getList(filters, type) {
        try {
            const { data } = await instance.get(`/${type}`, {
                params: filters
            })
            return data
        } catch (e) {
            throw e.response.data
        }
    }

}
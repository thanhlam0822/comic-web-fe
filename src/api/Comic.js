import Api from "./Api"
export default {
    getAll() {
        return Api.get('comic?pageNumber=0')
    },
    getAllPaginate(pageNumber) {
        return Api.get(`comic?pageNumber=${pageNumber-1}`)
    },
    searchComic(query) {
        return Api.get(`search?name=${query}`)
    },
    rankComic(dateSelect) {
        return Api.get(`ranking/`+dateSelect)
    },
    changeSize(size) {
        return Api.get(`comic?pageSize=${size}`)
    }

}

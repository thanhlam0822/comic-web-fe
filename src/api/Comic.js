import Api from "./Api"
export default {
    getAll() {
        return Api.get('comic?pageNumber=0')


    },
    getAllPaginate(pageNumber,size) {
        // return Api.get(`comic?pageNumber=${pageNumber-1}`)
        return Api.get(`comic`,{
            params: {
                pageNumber: pageNumber-1,

            }
        })
    },
    searchComic(query) {
        // return Api.get(`search?name=${query}`)
        return Api.get(`search?`,{
            params: {
                name: query
            }
        })
    },
    rankComic(dateSelect) {
        return Api.get(`ranking/`+dateSelect)
    },
    changeSize(size) {
        return Api.get(`comic?pageSize=${size}`)
    },
    changePageAndSize(number,size) {
        return Api.get(`comic`,{
            params: {
                pageNumber: number,
                pageSize:size

            }
        })
    }


}

import Api from "./Api"
export default {

    getAll() {
        return Api.get('comic?pageNumber=0')


    },

    searchComic(query) {
        // return Api.get(`search?name=${query}`)
        return Api.get(`search`,{
            params: {
                name: query
            }
        })
    },
    rankComic(dateSelect) {
        return Api.get(`ranking/`+dateSelect)
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

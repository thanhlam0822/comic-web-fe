import Api from "./Api"
export default {

    getAll() {
        return Api.get('comic?pageNumber=0')


    },
    searchComic(query,pageNumber,pageSize) {
        // return Api.get(`search?name=${query}`)
        return Api.get(`search`,{
            params: {
                query: query,
                pageNumber: pageNumber,
                pageSize:pageSize
            }
        })
    },
    rankComic(dateSelect) {
        return Api.get(`ranking/`+dateSelect)
    },
   filterComic(query1,query2,pageNumber,pageSize) {
        return Api.get('search2',{
            params: {
                query1:query1,
                query2:query2,
                pageNumber: pageNumber,
                pageSize: pageSize
            }

        })
   }






}

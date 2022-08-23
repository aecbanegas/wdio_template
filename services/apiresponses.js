import axios from 'axios';
import 'dotenv/config';

const AS_BASE_URL = process.env.WEB_API;
//TODO Actualizar a la nueva api
class ApiResponses {
    //section thet needs COOKIES
    //TODO Aun no se ha aplicado ninguna funcion de axios que requiera cookies
    async vefir(data) {
        try {
            let response = await axios.post(AS_BASE_URL + "/api/authenticate", data , {
                headers: {
                    "content-type": "application/json"
                }
            })
            return response;
        } catch(err) {
            return err;
        }
    }



    //section that does not needs COOKIES
    async getMarketPlace(order,page,items_per_page) {
        //Expected
        //order to be ASC or DESC
        //page expected int
        //items_per_page expected int
        try {
            const response = await axios.get(AS_BASE_URL + `/api/marketplace/${order}/${page}/${items_per_page}`)
            const {nfts} = response 
            return nfts;
        } catch(err) {
            return err;
        }
    }

    // async getRelationshipWithArticle(id, cookies) {
    //     let url = PARTICIPANT_SERVICE_BASE_URL + `/v1/participants/relationships?entityTypeId=ArticleProduct&entityId=${id}`
    //     try {
    //         let response = await axios.get(url, {
    //             headers: {
    //                 Cookie: cookies[0]
    //             }
    //         })
    //         return response;
    //     } catch(err) {

    //     }
    // }
}
export default new ApiResponses();
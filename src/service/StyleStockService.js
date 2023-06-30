import axios from "axios";
import qs from "qs";

const StyleStockService = {
    getAvailableBrands: function() {
        return axios.get('http://thegoodnetwork.fr/index.php/api/brands')
    },

    getPageOfBrand: function({limit = 20, page = 1, sortOrder = 'desc'}) {
        //return axios.get('http://thegoodnetwork.fr/index.php/api/brands')
        return axios.get('http://thegoodnetwork.fr/index.php/api/brands', {
            params: {
                page: page,
                limit: limit,
                //order_created_at_: `${sortOrder}`,
            },

            paramsSerializer: params => {
                return qs.stringify(params, {arrayFormat: 'repeat'})
            }
        })
    },

    getAvailableUsers: function() {
        return axios.get('http://thegoodnetwork.fr/index.php/api/users')
    },

    getPageOfUser: function({limit = 20, page = 1, sortOrder = 'desc'}) {
        return axios.get('http://thegoodnetwork.fr/index.php/api/users')
        // return axios.get('http://thegoodnetwork.fr/index.php/api/brands', {
        //     params: {
        //         page: page,
        //         limit: limit,
        //         order_created_at: `${sortOrder}`,
        //     },

        //     paramsSerializer: params => {
        //         return qs.stringify(params, {arrayFormat: 'repeat'})
        //     }
        // })
    },

    getAvailablePosts: function() {
        return axios.get('http://thegoodnetwork.fr/index.php/api/posts')
    },

    getPageOfPost: function({limit = 0, page = 0, sortOrder = 'desc'}) {
        //return axios.get('http://thegoodnetwork.fr/index.php/api/posts')
        return axios.get('http://thegoodnetwork.fr/index.php/api/posts', {
            params: {
                page: page,
                limit: limit,
                //order_created_at: `${sortOrder}`,
            },

            paramsSerializer: params => {
                return qs.stringify(params, {arrayFormat: 'repeat'})
            }
        })
    }
}

export default StyleStockService;
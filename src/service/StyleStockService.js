import axios from "axios";

const StyleStockService = {

    //Brands
    getAvailableBrands: function() {
        return axios.get('http://thegoodnetwork.fr/index.php/api/brands', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
    },

    getPageOfBrand: function({limit = 0, page = 1, id, name, status = 'APPROVED'}) {
        return axios.get('http://thegoodnetwork.fr/index.php/api/brands', {
            params: {
                page: page,
                limit: limit,
                id: id,
                name: name,
                status: status
            },
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              },
        })
    },

    getBrand: function(id) {
        return axios.get('http://thegoodnetwork.fr/index.php/api/brands/')
    },

    //Users
    getAvailableUsers: function() {
        return axios.get('http://thegoodnetwork.fr/index.php/api/users', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
    },

    getPageOfUser: function({limit = 0, page = 1, id, email}) {
        return axios.get('http://thegoodnetwork.fr/index.php/api/users', {
            params: {
                page: page,
                limit: limit,
                id: id,
                email: email
            },
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
    },

    //Post
    getAvailablePosts: function() {
        return axios.get('http://thegoodnetwork.fr/index.php/api/posts', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
    },

    getPageOfPost: function({limit = 0, page = 1, id, title}) {
        return axios.get('http://thegoodnetwork.fr/index.php/api/posts', {
            params: {
                page: page,
                limit: limit,
                id: id,
                title: title
            },
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
    },

    //NewBrands
    getAvailableNewBrands: function() {
        return axios.get('http://thegoodnetwork.fr/index.php/api/brands', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
    },

    getPageOfNewBrand: function({limit = 0, page = 1, id, name, status = 'PENDING'}) {
        return axios.get('http://thegoodnetwork.fr/index.php/api/brands', {
            params: {
                page: page,
                limit: limit,
                id: id,
                name: name,
                status: status
            },

            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              },


        })
    },
}

export default StyleStockService;
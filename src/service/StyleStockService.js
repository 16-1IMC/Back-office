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
        return axios.get(`http://thegoodnetwork.fr/index.php/api/brands/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
    },

    newBrandStatus: function(id, status) {
        return axios.put(`http://thegoodnetwork.fr/index.php/api/brands/${id}`, {status}, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
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

    getUser: function(id) {
        return axios.get(`http://thegoodnetwork.fr/index.php/api/users/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
    },

    deleteUser: function(id) {
        return axios.delete(`http://thegoodnetwork.fr/index.php/api/users/${id}`, {
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

    getPost: function(id) {
        return axios.get(`http://thegoodnetwork.fr/index.php/api/posts/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
    },

    deletePost: function(id) {
        return axios.delete(`http://thegoodnetwork.fr/index.php/api/posts/${id}`, {
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

    getNewBrand: function(id) {
        return axios.get(`http://thegoodnetwork.fr/index.php/api/brands/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
    },

    acceptNewBrandStatus: function(id) {
        return axios.put(`http://thegoodnetwork.fr/index.php/api/brands/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.token
              }
        })
    },

}

export default StyleStockService;
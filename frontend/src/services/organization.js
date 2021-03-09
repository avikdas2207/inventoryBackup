const axios = require('./axios.js');

class Organization{
    addOrg(value){
        let api_url = 'http://192.168.1.63:8000/api/v1/organizations/';
        return axios.post(api_url, value);
    }
}

module.exports = new Organization();
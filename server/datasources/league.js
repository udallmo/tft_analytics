const { RESTDataSource } = require('apollo-datasource-rest');
const { RIOT_API_KEY, BASE_URL } = require('./constant');

class LeagueAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = BASE_URL;
    }

    async getChallengers() {
        const response = await this.get('tft/league/v1/challenger', {api_key: RIOT_API_KEY});

        // resturns a list of challenger players        
        console.log(response);
    }
}

module.exports = LeagueAPI;
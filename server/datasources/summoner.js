const { RESTDataSource } = require('apollo-datasource-rest');
const { RIOT_API_KEY, NA_URL } = require('./constant');

class LeagueAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = NA_URL;
    }

    async getChallenger() {
        const response = await this.get('tft/league/v1/challenger', {api_key: RIOT_API_KEY});

        console.log(response);
    }
}

module.exports = LeagueAPI;
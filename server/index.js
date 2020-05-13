const {ApolloServer, gql} = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const LeagueAPI = require('./datasources/league');
const SummonerAPI = require('./datasources/summoner');
const MatchesAPI = require('./datasources/matches');

const server = new ApolloServer({
    typeDefs, 
    resolvers,
//    dataSources: () => ({
//        leagueAPI: new LeagueAPI(),
//        summonerAPI: new SummonerAPI(),
//        matchesAPI: new MatchesAPI()
//    })
});   
        
server.listen().then(({url})=>{
    console.log(`server is up ${url}`);
});




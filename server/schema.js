const { gql } = require('apollo-server');

const typeDefs = gql`
  type Player {
    summonerId: String
    summonerName: String
    leaguePoints: Int
    wins: Int
    loses: Int
  }

  type Query {
    players: [Player]
    higher(lp: Int!): Player
  }

`;

module.exports = typeDefs;
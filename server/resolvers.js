const summoners = [
    {
        summonerId: "ONnGoKEcuSU_HmKnKDb1NRk2KuDUpE1nUVpXk70-vdGARQ36",
        summonerName: "Nhân tâm TFT",
        leaguePoints: 948,
        rank: "I",
        wins: 38,
        losses: 176,
        veteran: false,
        inactive: false,
        freshBlood: false,
        hotStreak: false
    },
    {
        summonerId: "rPb20ekRxFgOusqvxKb3XAVLrNKYOlfPF7Hvz3jmgLB1Q5w",
        summonerName: "robinthongz",
        leaguePoints: 1081,
        rank: "I",
        wins: 47,
        losses: 153,
        veteran: false,
        inactive: false,
        freshBlood: true,
        hotStreak: false
    },
]


module.exports = {
    Query: {
        players: () => players,
        higher: async (_, { lp = 10 }, {dataSources}) =>{
            if (summoners.leaguePoints > lp) {
                return summoners
            }
            return null
        }
    }
}
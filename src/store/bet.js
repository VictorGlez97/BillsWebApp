import axios from 'axios';

export default {
    state: {
        bets: [],
        type_bet: [],
        sport_bet: [],
        result_bet: [],
    },

    getters: {
        getBets: (state) => state.bets,
        getTypesBet: (state) => state.type_bet,
        getSportsBet: (state) => state.sport_bet,
        getResultsBet: (state) => state.result_bet
    },

    actions: {
        
        async fetchBets({ commit }) {
            try {
                const response = await axios.get('https://apierp.vercel.app/bet');
                // console.log( response.data.data );
                commit('setBets', response.data.data)
            } catch (error) {
                console.log(error);
            }
        },

        async fechTyepBets({ commit }) {
            try {
                const response = await axios.get('https://apierp.vercel.app/dictionary/bet/type');
                commit('setTypes', response.data.data)
            } catch (error) {
                console.log( error );
            }
        },
        
        async fechSportBets({ commit }) {
            try {
                const response = await axios.get('https://apierp.vercel.app/dictionary/bet/sport');
                commit('setSports', response.data.data)
            } catch (error) {
                console.log( error );
            }
        },

        async fechResultBets({ commit }) {
            try {
                const response = await axios.get('https://apierp.vercel.app/dictionary/bet/result');
                commit('setResults', response.data.data)
            } catch (error) {
                console.log( error );
            }
        },

        async createBet({ commit }, bill) {
            try {
                const response = await axios.post('https://apierp.vercel.app/bet', bill);
                console.log( response.data );
                commit('createBet', response.data);
            } catch (error) {
                console.log(error);
            }
        },
    },

    mutations: {
        setBets: (state, bets) => { 
            console.log( bets );
            (state.bets = bets) 
        },
        setTypes: (state, types) => {
            console.log( types );
            state.type_bet = types;
        },
        setSports: (state, sports) => {
            console.log( sports );
            state.sport_bet = sports;
        },
        setResults: (state, results) => {
            console.log( results );
            state.result_bet = results;
        },
        createBet: (state, bet) => state.bets.push(bet),
    }
}
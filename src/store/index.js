import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        bills: []
    },

    getters: {
        getItems: (state) => state.bills,
    },

    actions: {
        async createBill({ commit }, bill) {
            try {
                console.log( 'commit', commit );
                console.log( 'bill', bill );
                const response = await axios.post('https://apierp.vercel.app/bill', bill);
                console.log( response.data );
                commit('createBill', response.data);
            } catch (error) {
                console.log(error);
            }
        },
    
        async updateBill({ commit }, { id, bill }) {
            try {
                const response = await axios.put(`https://apierp.vercel.app/bill/${id}`, bill)
                commit('editBill', { id, bill: response.data });
            } catch (error) {
                console.log(error);
            }
        },
    
        async deleteBill({ commit }, id) {
            try {
                await axios.delete(`https://apierp.vercel.app/bill/${id}`);
                commit('deleteBill', id);
            } catch (error) {
                console.log(error);
            }
        }
        // async fetchBills({ commit }) {
        //     try {
        //         const response = await axios.get()
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },
    },

    mutations: {
        createBill: (state, bill) => state.bills.push(bill),
        editBill: (state, { id, bill }) => {
            const index = state.bills.findIndex((i) => i.id === id);
            if (index !== -1) {
                state.bills[index] == bill
            }
        },
        deleteBill: (state, id) =>  
            (state.bills = state.bills.filter((bill) => bill.id !== id)) 
    }

})

export default store;
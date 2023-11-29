<template>
    <div class="container">
        <div>
            <h4> Bills </h4>
            <!-- <v-card-text> -->
                <!-- <v-form @submit.prevent="addBill"> -->
                <div>
                    <label> Name </label>
                    <input v-model="name" label="Name" />
                </div>

                <div>
                    <label> Description </label>
                    <input v-model="description" label="Description" />
                </div>

                <div>
                    <label> Catgory </label>
                    <input v-model="category" label="Category" />
                </div>

                <div>
                    <label> Amount </label>
                    <input v-model="amount" label="Amount" />
                </div>

                <div>
                    <label> Type </label>
                    <input v-model="type" label="Type" />
                </div>

                <button color="primary" @click="addBill"> Agregar </button>
                <!-- </v-form> -->
            <!-- </v-card-text> -->
            </div>
        <div>
            {{ bills }}

            <table>
                <thead>
                    <th> Bill </th>
                    <th> Description </th>
                    <th> Amount </th>
                    <th> Category </th>
                    <th> Type </th>
                </thead>
                <tbody>
                    <tr v-for="bill in bills" :key="bill.id">
                        <td> {{ bill.name }} </td>
                        <td> {{ bill.description }} </td>
                        <td> {{ bill.amount }} </td>
                        <td> {{ bill.category }} </td>
                        <td> {{ bill.type }} </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            name: 'Mandado',
            description: 'Carne asada con los compas',
            category: 1,
            amount: 1500.00,
            type: 3,
            user: 1,
            bills_data: []
        }
    },

    computed: {
        ...mapGetters({
            bills: 'getItems'
        })
    },

    // computed: {
    //     bills() {
    //         console.log('consumiendo bills data');
    //         this.bills_data = this.$store.getters.getBills;
    //         console.log( this.bills_data );
    //     },
    // },

    methods: {
        addBill() {
            var data = { 
                user: this.user, 
                name: this.name, 
                description: this.description, 
                category: this.category, 
                amount: this.amount, 
                type: this.type 
            }; 
            this.$store.dispatch('createBill', data);
        },
    },

    mounted() {
        this.$store.dispatch('fetchBills');
    }

}
</script>
<template>
    <div>
        <v-card>
            <v-card-title> Bills </v-card-title>
            <!-- <v-card-text> -->
                <!-- <v-form @submit.prevent="addBill"> -->
                        <v-row>
                            <v-col>
                                <v-text-field v-model="name" label="Name"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-text-field v-model="description" label="Description"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-text-field v-model="category" label="Category"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-text-field v-model="amount" label="Amount"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-text-field v-model="type" label="Type"></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-text-field v-model="user" label="User"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-btn color="primary" @click="addBill"> Agregar </v-btn>
                <!-- </v-form> -->
            <!-- </v-card-text> -->
        </v-card>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                name: 'Mandado',
                description: 'Carne asada con los compas',
                category: 1,
                amount: 1500.00,
                type: 3,
                user: 1
            }
        },

        // computed: {
            // bills() {
            //     return this.$store.getters.getBills;
            // },
        // },

        methods: {
            addBill() {
                var data = { user: this.user, name: this.name, description: this.description, category: this.category, amount: this.amount, type: this.type }; 
                // console.log(data);
                this.$store.dispatch('createBill', data);
            },
        }//,

        // mounted() {
            // this.$store.dispatch('fetchBills');
        // }

    }
</script>
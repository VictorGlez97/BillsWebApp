<template>

    <!-- <div>
        {{ types }}
        {{ sports }}
        {{ results }}
    </div> -->

    <div style="display: flex; flex-direction: column; padding-left: 30%; padding-right: 30%;">

        <input type="text" v-model="apuesta" placeholder="apuesta">

        <textarea v-model="descripcion" cols="30" rows="2" placeholder="descripción de apuesta"></textarea>

        <select v-model="selected_type">
            <option value="0" disabled> Selecciona un tipo de apuesta </option>
            <option :value="item.id" v-for="item in types" :key="item.key">{{ item.dictionary }}</option>
        </select>

        <select v-model="selected_sport">
            <option value="0" disabled> Selecciona un deporte </option>
            <option :value="item.id" v-for="item in sports" :key="item.id">{{ item.dictionary }}</option>
        </select>

        <!-- <select v-model="selected_result">
            <option value="0" disabled> Selecciona un resultado </option>
            <option :value="item.id" v-for="item in results" :key="item.key">{{ item.dictionary }}</option>
        </select> -->

        <input type="number" v-model="momio" placeholder="momio">

        <input type="number" v-model="cantidad" placeholder="cantidad apostada">

        <div style="display: flex; flex-direction: row; justify-content: end; margin-top: .5%;">
            <p v-if="loading"> Cargando... </p>
            <button @click="Guardar" v-if="!loading"> Guardar </button>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            modales: [],
            selects: [],
            apuesta: '',
            descripcion: '',
            selected_type: 0,
            selected_sport: 0,
            selected_result: 0,
            momio: 0,
            cantidad: 0,
            loading: false
        }
    },

    mounted() {
        this.$store.dispatch('fechTyepBets');
        this.$store.dispatch('fechSportBets');
        // this.$store.dispatch('fechResultBets');
    },

    computed: {
        ...mapGetters({
            types: 'getTypesBet',
            sports: 'getSportsBet',
            // results: 'getResultsBet'
        })
    },

    methods: {

        async Guardar() {

            this.loading = true;

            const data = {
                name: this.apuesta,
                description: this.descripcion,
                type: parseInt(this.selected_type),
                sport: parseInt(this.selected_sport),
                // result: parseInt(this.selected_result),
                result: 12,
                momio: parseFloat(this.momio),
                amount: parseFloat(this.cantidad),
                user: parseInt(1)
            }

            console.log( data );

            await this.$store.dispatch('createBet', data);
            await this.$store.dispatch('fetchBets');

            this.loading = false;

        }

    }

}
</script>

<style>
input, select, textarea {
    margin: .5%;
}
</style>
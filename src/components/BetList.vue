<template>

    <div style="display: flex; justify-content: start;">
        <button @click="tbl=true"> Card </button>
        <button @click="tbl=false"> Table </button>
    </div>

    <div v-if="tbl" style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; column-gap: 2rem; padding-left: 5rem; padding-right: 5rem; margin-bottom: 5rem;">
        <div v-for="bet in bets" :key="bet.name" :id="bet.resulr.toLowerCase()" style="padding-left: 1rem; padding-right: 1rem;">
            <div style="display: flex; flex-direction: row; justify-content: space-between;">
                <div> {{ bet.sport }} </div>
                <div> {{ bet.resulr }} </div>
            </div>
            
            <div style="display: flex; flex-direction: column;">
                <div style="margin-left: 1rem;"> {{ bet.name }} </div>
                <div style="margin-left: 1rem;"> {{ bet.description }} </div>
            </div>
    
            <div style="display: flex; justify-content: end;">
                <div style="margin-right: 1rem;"> {{ bet.momio }} </div>
                <div> {{ bet.amount }} </div>
            </div>
        </div>
    </div>

    <div v-if="!tbl" style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 2%;">
        <table>
            <thead>
                <tr>
                    <th> Apuesta </th>
                    <th> Momio </th>
                    <th> Cantidad </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bet in bets" :key="bet.name" :id="bet.resulr.toLowerCase()">
                    <td>{{ bet.name }}</td>
                    <td>{{ bet.momio }}</td>
                    <td>{{ bet.amount }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- <div>
        {{ bets }}
    </div> -->

</template>

<script>
import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            tbl: false
        }
    },

    computed: {

        ...mapGetters({
            bets: 'getBets'
        })

    }

}
</script>

<style>
.container {
    display: grid;
    grid-template-columns: 3% 3% 3%;
    grid-template-rows: auto;
    grid-template-areas: 
        "header . . header"
        ". main main . "
        ". section section ."
        ". . footer footer";
}

#win {
    background-color: #52BE80;
    color: white;
}

#lose {
    background-color: #EC7063;
    color: white;
}

#null {
    background-color: #99A3A4;
    color: black;
}

#none {
    background-color: #F4F6F7;
    color: black;
}
</style>
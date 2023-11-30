<template>

    <!-- <div
        v-for="bet in bets"
    >
        <div class="row">
            <div class="col s12 m5">
                <div class="card-panel teal">
                    {{ bet.amount }}
                </div>
            </div>
        </div>
    </div> -->

    <div style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 2%;">
        <table>
            <thead>
                <tr>
                    <th> Apuesta </th>
                    <th> Momio </th>
                    <th> Cantidad </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bet in bets" :key="bet.name">
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

        }
    },

    computed: {

        ...mapGetters({
            bets: 'getBets'
        })

    }

}
</script>
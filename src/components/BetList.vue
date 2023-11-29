<template>

    <div
        v-for="bet in bets"
    >
        <div class="row">
            <div class="col s12 m5">
                <div class="card-panel teal">
                    {{ bet.amount }}
                </div>
            </div>
        </div>
    </div>

    <div>
        {{ bets }}
    </div>

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
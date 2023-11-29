<template>

    <div class="container">

        <BetForm/>
        
        <BetList/>
        
        <BetModal/>

    </div>

</template>

<script>
import BetForm from '../components/BetForm.vue';
import BetList from '../components/BetList.vue';
import BetModal from '../components/BetModal.vue';

export default {
    data() {
        return {};
    },

    components: { BetForm, BetList, BetModal },

    mounted() {

        this.$store.dispatch('fetchBets');

    }

}
</script>
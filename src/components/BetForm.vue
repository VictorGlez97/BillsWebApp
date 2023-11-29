<template>

    <div>
        {{ types }}
        {{ sports }}
        {{ results }}
    </div>

    <Button label="Show" icon="pi pi-external-link" @click="visible = true" />

    <Dialog v-model:visible="visible" header="Header" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </Dialog>

</template>

<script>
import { mapGetters } from 'vuex';

import { ref } from "vue";
import { Button } from 'primevue/button';
import { Dialog } from 'primevue/dialog';

export default {

    components: {
        Button, Dialog
    },

    setup() {
        const visible = ref(false);

        const showDialog = () => {
            visible.value = true;
        };

        const onHideDialog = () => {
            visible.value = false;
        };

        return {
            visible,
            showDialog,
            onHideDialog
        };
    },

    data() {
        return {
            modales: [],
            selects: [],
            selected_type: 0,
        }
    },

    mounted() {
        
        this.$store.dispatch('fechTyepBets');
        this.$store.dispatch('fechSportBets');
        this.$store.dispatch('fechResultBets');

        const visible = ref(false);

    },

    computed: {
        ...mapGetters({
            types: 'getTypesBet',
            sports: 'getSportsBet',
            results: 'getResultsBet'
        })
    },

    methods: {

        openModal() {
            const instance = this.$refs.modal;
            const modalInstance = M.Modal.init(instance);
            // modalInstance.open();
        }

    }

}
</script>

<style>
/* .modal { 
    width: 75% !important; 
    height: 75% !important; 
} */
</style>
<template>

    <div class="flex justify-content-center">
        <div class="field col">
            <label for="start"> Initial date </label>
            <Calendar 
                id="start" 
                class="text-base text-color w-full"
                v-model="start" 
                size="small" 
                showIcon 
            />
        </div>

        <div class="field col">
            <label for="finish"> Finish date </label>
            <Calendar 
                id="finish" 
                class="text-base text-color w-full"
                v-model="finish" 
                size="small" 
                showIcon 
            />
        </div>

        <div class="field col">
            <label for="user"> User </label>
            <Dropdown 
                v-model="selectedUser" 
                editable 
                :options="users" 
                optionLabel="name" 
                placeholder="" 
                class="text-base text-color w-full" 
            />
        </div>
        
        <div class="field col align-items-end flex align-items-end">
            <Button label="Search" icon="pi pi-search" @click="buscarBank" />
        </div>

        <div class="field col align-items-end flex align-items-end">
            <Button label="Create" icon="pi pi-plus" @click="abrirModal" />
        </div>
    </div>

    <BankModal ref="miModal" />

    <BankList />

</template>

<script>
import BankModal from '../components/BankModal.vue';
import BankList from '../components/BankList.vue';

export default {

    components: {
        BankModal, BankList
    },

    data() {
        return {
            visible: false,
            selectedUser: 0,
            users: [
                { name: 'Hugo', code: 1 },
                { name: 'Victor', code: 2 },
            ],
            loading: false
        }
    },

    methods: {

        abrirModal() {
            this.$refs.miModal.abrirModal();
        },

        async buscarBank() {
            this.loading = true;
            await this.$store.dispatch('buscaBank', { start: this.start, finish: this.finish, user: this.selectedUser })
            this.loading = false;
        },

    }

}
</script>
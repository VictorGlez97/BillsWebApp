<template>
    
    <Dialog v-model:visible="visible" modal header="Create bank" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        
        <div class="flex flex-column md:flex-row md:justify-content-between row-gap-3">
            <div class="flex-1">
                <label for="di" class="font-bold block mb-2"> Fecha inicial </label>
                <Calendar id="di" v-model="initial_date" size="small" showIcon />
            </div>
    
            <div class="flex-1">
                <label for="df" class="font-bold block mb-2"> Fecha final </label>
                <Calendar id="df" v-model="finish_date" size="small" showIcon />
            </div>
        </div>

        <div class="flex align-items-end flex-wrap md:flex-row md:justify-content-between">
            <div class="block mt-3">
                <label for="money" class="font-bold block mb-2"> Money </label>
                <InputText id="money" v-model="money" />
            </div>

            <div class="block mt-3">
                <Button type="button" label="Guardar" icon="pi pi-save" :loading="loading" @click="guardaBank" />
            </div>
        </div>

    </Dialog>

</template>

<script>
import { ref } from 'vue';

export default {

    data() {
        return {
            visible: false,
            initial_date: '',
            finish_date: '',
            money: 0.0, 
            loading: false
        }
    },

    methods: {

        abrirModal() {
            this.visible = !this.visible;
        },

        guardaBank() {

        },

    }

}
</script>
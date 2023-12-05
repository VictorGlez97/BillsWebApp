<template>

    <div class="p-8">
        <DataTable :value="banks" class="p-datatable-sm" stripedRows tableStyle="min-width: 50rem;">
            <Column field="start" header="Initial date"></Column>
            <Column field="finish" header="Finish date"></Column>
            <Column field="money" header="Bank"></Column>
        </DataTable>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            banks: [
                {
                    start: '2023-10-01 00:00:00',
                    finish: '2023-10-30 00:00:00',
                    money: 1500.00,
                    user: 'VHGA'
                },
                {
                    start: '2023-11-01 00:00:00',
                    finish: '2023-11-30 00:00:00',
                    money: 1000.00,
                    user: 'VHGA'
                },
                {
                    start: '2023-12-01 00:00:00',
                    finish: '2023-12-30 00:00:00',
                    money: 500.00,
                    user: 'VHGA'
                }
            ]
        }
    },

    computed() {

        // mapGetters({
        //     banks: ''
        // })

    },

    methods: {

    }

}
</script>
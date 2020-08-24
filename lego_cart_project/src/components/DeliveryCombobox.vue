<template>
    <div class="combobox_container">
        <div @click="changeOption(DelivOption.id)" :class="{chosen: DelivOption.id == selectedOption}" v-for="DelivOption in DelivOptions" :key="DelivOption.id">
            <delivery-option-btn :DelivOptInfo="DelivOption">
            </delivery-option-btn>
        </div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DeliveryOptionBtn from '@/components/DeliveryOptionBtn.vue'
export default Vue.extend({
    props:['DelivOptions'],
    data(){
        return{
            selectedOption:0
        }
    },
    methods:{
        changeOption(delivId: number){
            this.selectedOption = delivId;
        }
    },
    components:{
        DeliveryOptionBtn
    }
})
</script>


<style lang="scss" scoped>
.chosen{
    border:1px solid gold;
}
</style>
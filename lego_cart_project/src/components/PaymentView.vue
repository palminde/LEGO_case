<template>
    <div class=payment_container>
        <h2>Subtotal {{subtotal}} DKK</h2>
        <h2>VAT (25%) {{vat}} DKK</h2>
        <span id=divider></span>
        <h2 id=total>Total {{subtotal}} DKK</h2>
        <button id="payment_btn">GO TO DELIVERY OPTIONS</button>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        subtotal: Number
    },
    computed:{
        vat(){
            const result = this.subtotal/4
            return result;
        }
    }

})
</script>

<style lang="scss" scoped>
h2{
    margin-left:20px;
    font-weight:200;

}
#total{
    font-weight:600;
    
}
.payment_container{
    display:flex;
    flex-direction: column;
    width:100% !important;
}
#divider{
    width:80%;
    align-self: center;
    border:1px solid lightgrey;
    margin-top:20px;
    margin-bottom:20px;
}
#payment_btn{
    position: absolute;
    bottom:0;
    align-self:center;
    width:100%;
    height:50px;
    border:none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #f8d047;
    font-weight: 600;
    font-size:14px;
}
#payment_btn:focus{
    outline:none;
}
#payment_btn:hover{
    cursor: pointer;
}
#payment_btn:active{
    background-color:#d3af39;
}
</style>
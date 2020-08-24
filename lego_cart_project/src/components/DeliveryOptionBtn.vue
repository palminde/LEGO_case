<template>
    <div class=delivery_opt_container>
        <div class=text_container>
            <h2>{{DelivOptInfo.largeText}} - {{DelivOptInfo.price}} DKK</h2>
            <h4>{{DelivOptInfo.smallText}}</h4>
        </div>
        <div class=img_container>
            <img :src="DelivOptInfo.imgsrc" alt="">
        </div>
    </div>    
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        DelivOptInfo: Object
    }
    
})
</script>

<style lang="scss" scoped>
.delivery_opt_container{
    display:flex;
    width:80%;
}
</style>
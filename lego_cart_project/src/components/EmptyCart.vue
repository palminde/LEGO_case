<template>
    <div class=empty_cart_container>
        <img :src="require('../assets/' + possibleLegoSpeaker[index].img)" alt="">
        <h1>{{possibleLegoSpeaker[index].text}}</h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props:{
        index: Number,
    },
    data(){
        return{
            possibleLegoSpeaker:[
                {text:'Yarr cart is empty matey!',img:'pirate_lego.png'},
                {text:'Your cart is as empty as space!',img:'space_lego.png'}
            ]
        }
    },
    created(){
        console.log(this.index)
        console.log(this.possibleLegoSpeaker)
    }
})
</script>

<style lang="scss" scoped>
.empty_cart_container{
    width:100%;
    display:flex;
    justify-content: center;
}
img{
    width:200px;
    height:200px;
}
</style>
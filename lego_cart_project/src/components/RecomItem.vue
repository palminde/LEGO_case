<template>
    <div class=recom_item_container>
        <img :src="require('../assets/' + item.img)" alt="">
        <h2>{{item.title}}</h2>
        <h1>{{item.price}} DKK</h1>
        <button @click="AddToCart">ADD TO CART</button>
    </div>    
</template>


<script lang="ts">
import Vue from 'vue'
import Item from '../models/Item'
export default Vue.extend({
    props:{
        item:Item
    },
    methods:{
        AddToCart(){
            this.$emit('AddToCart', this.item)
        }
    }
    
})
</script>

<style lang="scss" scoped>
.recom_item_container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
    border-radius: 3px;
    width:180px;
    h2{
        font-size: 16px;
    }
    h1{
        font-size:18px;
        font-weight: 300;
        margin-top:0;
    }
    button{
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
    button:focus{
        outline:none;
    }
    button:hover{
        cursor: pointer;
    }
    button:active{
        background-color:#d3af39;
    }
    
}
img{
    width:150px;
    height:150px;
    margin:10px;
}

</style>
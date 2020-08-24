<template>
  <div class="item_container">
    <div class="img_placeholder">
      <img :src="require('../assets/' + item.img)" alt="">
    </div>
    <div class=info_controls>
      <h2>{{item.title}}</h2>
      <h3>{{item.price}} DKK</h3>
      <div class=quant_container>
        <button @click="RemoveOneFromCart">-</button>
        <p>{{item.qty}}</p>
        <button @click="AddOneToCart">+</button>
        <img @click="() => deleteDialog = !deleteDialog" id="del-btn" src="../assets/bin.png" alt="">
      </div>
      <div v-if="deleteDialog" class=delete_dialog>
          <p>Do you want to remove this item from your cart?</p>
          <button @click="Delete">YES</button>
          <button @click="() => deleteDialog = !deleteDialog">NO</button>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Item from '../models/Item'
export default Vue.extend({
  name: 'ItemView',
  props:{
    item: Item,
  },
  data(){
      return{
          deleteDialog:false
      }
  },
  methods:{
    Delete(){
        this.$emit('DeleteFromCart',this.item)
    },
    Remove(){
        this.$emit('RemoveFromCart',this.item)
    },
    RemoveOneFromCart(){
        if(this.item.qty === 1){
            this.deleteDialog = !this.deleteDialog
        }
        else{
            this.Remove()
        } 
    },
    AddOneToCart(){
        this.$emit('AddToCart',this.item)
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item_container{
  display: flex;
  margin-bottom:50px;
  position: relative;
}
.info_controls{
  display:flex;
  flex-direction: column;
  margin-left:40px;
  width:70%;
  margin-top:10px;
  h2{
    font-weight:800
  }
  h3{
    margin:-10px 0px 40px 0px;
    font-size:20px;
    font-weight: 550;
  }
}
.img_placeholder{
  width:30%;
  height:200px;
  img{
    width:100%;
    height:100%;
  }
}

.quant_container{
    display:flex;
    flex-direction: row;
    p{
      background-color: white;
      text-align: center;
      height:30px;
      width:60px;
      line-height: 2;
      border-radius: 5px;
      margin: 0px 10px 0px 10px;
      border:1px solid #c4c4c4;
    }
    button{
      border-radius: 30px;
      width:30px;
      height:30px;
      background-color: #f8d047;
      border:none;
      font-weight: 400;
      font-size:16px;
    }
    button:focus{
      outline:none;
    }
    button:hover{
      cursor: pointer;
    }
    button:active{
      background-color:#d3af39 ;
    }

    #del-btn{
      margin-left:auto;
      margin-right:40%;
      margin-top:5px;
      width:20px;
      height:25px;
    }
    #del-btn:hover{
      cursor: pointer;
    }
}
.delete_dialog{
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(211, 211, 211, 0.80);
    border-radius: 10px;
    z-index: 10;
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap:wrap;
    p{
      width:100%;
      margin-top:60px;
      text-align: center;
      font-size: 20px;
      font-weight: 800;
      text-shadow: black;
    }
    button{
      width:25%;
      height:50px;
      border:none;
      margin-top:-30px;
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
      background-color:#d3af39 ;
    }
    button:last-child{
      margin-left:40px;
    }
}

</style>

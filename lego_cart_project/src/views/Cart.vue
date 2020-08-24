<template>
  <div class=cart_container>
    <progress-bar/>
    <div class=row2_container>
      <div class=information_container>
      <div v-if="ActiveCart.length != 0" class=product_container>
        <div class=item_container  v-for="item in ActiveCart" :key="item.id" >
          <item-cart-view @AddToCart="AddToCart" @RemoveFromCart="RemoveFromCart" @DeleteFromCart="DeleteFromCart" :item="item"> </item-cart-view>
        </div>
      </div>
      <div v-if="ActiveCart.length == 0">
        <empty-cart :index="Math.floor(Math.random()*2)" />
      </div>

      </div>
      <div class=payment_container>
        <payment-view :subtotal="TotalPrice"></payment-view>
      </div>
    </div>
    <div class=recom_container>
      <div class=divider_container>
        <span class=divider></span>
        <img src="../assets/star.png" alt="">
        <span class=divider></span>  
      </div>
      <div class=recom_row>
        <h2>Inspired by your cart</h2>
        <recom-item @AddToCart="AddToCart" v-for="recom_item in RecomItems" :key="recom_item.id" :item="recom_item"/>
      </div>  
    </div> 
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ItemCartView from '@/components/ItemCartView.vue'
import PaymentView from '@/components/PaymentView.vue'
import RecomItem from '@/components/RecomItem.vue'
import EmptyCart from '@/components/EmptyCart.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import Item from '../models/Item'
export default Vue.extend({
  name:'Cart',
  data(){
    return{
      DelivOptions:[
        {id:0, largeText:'Standard', price:0, smallText:'Within 2-4 business days', imgsrc:'PostNord'},
        {id:1, largeText:'Express', price:39, smallText:'The next day', imgsrc:'GLS'}
      ],
      showGuestForm:false,
      ActiveCart:[
        new Item(0, "Hedwig", "Hedwig.png", 1, 349.00),
        new Item(1, "Hogwarts Clock Tower", "ClockTower.png", 1, 849.00)
      ],
      RecomItems:[
        new Item(2,'Hogwarts Castle', 'Hogwarts_castle.png', 1, 3499.00),
        new Item(3,'The Knight Bus', 'Knight_bus.png', 1, 349.00),
        new Item(4,'The Great Hall', 'great_hall.png', 1, 899.00),
        new Item(5,'The upside down', 'upside_down.png', 1, 1799.00)
      ]
    }
  },
  methods:{
    AddToCart(item: Item){
      //Find index of the item in the active cart list
      const index: number = this.IndexOfItemInList(item, this.ActiveCart);
      //If index is found then increment qty
      if(index !== -1){
        this.ActiveCart[index].qty++
      }
      //else push the item to the ActiveCart array
      else{
        this.ActiveCart.push(item)
      }
    },
    RemoveFromCart(item: Item){
        item.qty--
    },
    DeleteFromCart(item: Item){
      const index: number = this.IndexOfItemInList(item, this.ActiveCart);
      this.ActiveCart.splice(index,1)
    },
    IndexOfItemInList(item: Item, items: Array<Item>): number{
      for(let i = 0; i < items.length; i++){
        if(items[i].id === item.id){
          return i;
        }
      }
      return -1;
    }
  },
  components:{
    ItemCartView,
    PaymentView,
    RecomItem,
    EmptyCart,
    ProgressBar
  },
  computed:{
    TotalPrice(){
      let price = 0;
      for(const item of this.ActiveCart){
        price += (item.qty * item.price)
      }
      return price;
    }
  }
})
</script>


<style lang="scss" scoped>
.row2_container{
  display:flex;
  justify-content: space-between;
}

.cart_container{
  display:flex;
  width:90%;
  flex-direction: column;
  margin-bottom:50px;
}

.information_container{
    width:65%;
    display:flex;
    flex-direction: column;
    justify-content: center;
}
.payment_container{
    width:30%;
    height:300px;
    border: lightgrey 1px solid;
    border-radius: 5px;
    position:-webkit-sticky;
    position: sticky;
    top:20px;
}

.divider_container{
  width:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  img{
    width:40px;
    margin-right:20px;
    margin-left:20px;
  }
  .divider{
    width:50%;
    border-bottom:1px solid lightgrey;
  }
}

.recom_container{
  width:65%;
  display: flex;
  flex-direction: column;
}

.recom_row{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h2{
    width:100%;
    text-align: center;
  }
}
</style>
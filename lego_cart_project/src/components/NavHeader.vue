<template>
    <div class="nav_container">
        <img id="logo-img" src="../assets/lego.png" alt="">
        <ul id="menu-items">
            <li>THEMES</li>
            <li>FULL SETS</li>
            <li>OFFERS</li>
            <li>OUTLET</li>
        </ul>
        <div class="nav_icon_container">
            <div class="nav_icon">
                <img src="../assets/lego_man.png" alt="">
                <p>Log In</p>
            </div>
            <div class="nav_icon">
                <img id="heart" src="../assets/heart_empty.png" alt="">
                <p>Wish List</p>
            </div>
            <div class="nav_icon">
                <img src="../assets/basket.png" alt="">
                <p id="cart">Cart</p>
                <p id="cartcounter">{{cartCount}}</p>
            </div>
        </div>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            cartCount:4
        }
    }
})
</script>

<style lang="scss" scoped>
.nav_container{
    width:100%;
    background-color: #f8d047;
    height:100px;
    margin-bottom: 50px;
    display:flex;
    align-items:center;
}

#menu-items{
    list-style:none;
    li{
        float:left;
        margin-right:20px;
        font-weight: 600;
    }
}
.nav_icon:hover{
    cursor: pointer;
}

.nav_icon{
    position:relative;
}
#logo-img{
    height:80px;
    margin-left:10px;
}
.nav_icon_container{
    width:20%;
    height:100%;
    margin-left:auto;
    display:flex;
    justify-content: space-evenly;
    align-items: flex-end;
    text-align: center;
    
    margin-bottom:25px;
    #cartcounter{
        position: absolute;
        top:23px;
        right:5px;
    }
    p{
        margin:0px;
    }
    #cart{
        font-weight: 700;
    }
    #heart{
        width:40px;
        height:35px;
    }
    img{
        height:40px;
    }
}
</style>
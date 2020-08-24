<template>
  <div class="progress_container">
    <div class="prog_icon">
      <img src="../assets/basket_yellow.png" alt />
      <p style="color:#F8D047">Cart</p>
    </div>
    <span class="progline"></span>
    <div class="prog_icon">
      <img src="../assets/delivery_grey.png" alt />
      <p>Delivery</p>
    </div>
    <span class="progline"></span>
    <div class="prog_icon">
      <img src="../assets/Payment.png" alt />
      <p>Payment</p>
    </div>
    <span class="progline"></span>
    <div class="prog_icon">
      <img src="../assets/accept.png" alt />
      <p>Done</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.prog_icon{
  text-align: center;
  margin-top:10px;
  p{
    margin:0px;
    font-size: 12px;
    font-weight: 600;
    color:lightgrey;
  }
}

.progress_container{
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom:50px;
  img{
    height:30px;
    margin-left:20px;
    margin-right:20px;
  }
  .progline{
    width:20%;
    height:0px;
    border-top:1px solid rgb(175, 175, 175);
  }
}
</style>
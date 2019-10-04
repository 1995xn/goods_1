<template>
  <div>
      <div class="main2">
        <div class="left">
            <div class="m-left">
                <span>2019-09-23</span>
                <span>订单号：</span>
                <span>1612747769</span>
            </div>
           <div class="m-right">
               <span>单价</span>
               <span>数量</span>
           </div>
        </div>
        <div class="right">
            <div class="g-left"><span>应付总额</span></div>
            <div class="g-right"><span>查看详情></span></div>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main2{
   height: 50px;
   width: 100%;
   background-color: #79C999;
   opacity: 0.7;
}
.left{
    width: 70%;
}
.m-left{
    width: 50%;
    height: 50px;
    float: left;
}
.m-left span{
    display: block;
     height: 50px;
    float: left;
    line-height: 50px;
    padding-left: 20px;
}
.m-right{
     width: 50%;
     height: 50px;
     float: left;
}
.m-right span{
    display: block;
    height: 50px;
    float: right;
    line-height: 50px;
    padding-right: 20px;
   
}
.right{
    width: 30%;
     float: left;
     display: flex;
     justify-content:space-between;
}
.g-left{
     
     height: 50px;
    float: left;
    text-align: center;
    margin-left: 50px;
}
.g-left span{
 display: block;
    height: 50px;
    line-height: 50px;
}
.g-right{
     
     height: 50px;
     float: left;
     text-align: center;
   
}
.g-right span{
     display: block;
    height: 50px;
   margin-right: 20px;
    line-height: 50px;
}


</style>

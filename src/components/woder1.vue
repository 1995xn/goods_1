<template>
  <div>
      <div class="main1">
        <div class="yi"><span>我的订单</span></div>
        <div class="er">
            <input type="button"value="最近三个月">
            <input type="button"value="全部状态">
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main1{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
     background-color: #79C999;
}
.yi span{
    display: block;
    color: black;
    width: 100px;
    height: 100px;
    line-height: 100px;
    margin-left: 20%;
    font-size: 20px;
}
.er input{
    color: black;
    width: 100px;
    height: 30px;
    margin-top: 40px;
    border-radius: 10%;
    background: white;
    opacity: 0.5;
} 
</style>

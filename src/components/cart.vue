<template>
    <div class="myshop">
          <h3 class="title">我的购物车</h3>
          <div class="empty" v-if="!cartData.length>0">
               <h3>购物车为空</h3>
               <p>您还没有选购任何商品，现在前往选购吧!</p>
               <p style="text-align:center;padding-top:20px;">
                   <img src="../assets/img/cart-empty.png" alt="">
               </p>
           </div>
           <div class="content" v-else>
               <div class="item" style="height:40px;">
                    <span>图&nbsp;&nbsp;片</span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>小计</span>
                    <span>删除</span>
               </div>
               <div class="item"v-for="item in cartData">
                    <span><img :src="item.decp"/></span>
                    <span>￥{{item.price}}</span>
                    <span>
                        <input type="button" value="-"@click="subCount(index)">
                        <input type="text" v-model="item.count"style="width:18px;">
                        <input type="button" value="+"@click="addCount(index)">
                    </span>
                    <span>￥{{item.price*item.count}}</span>
                    <span>X</span>
               </div>
               
           </div>
           <div class="my-footer">
               <div v-if="cartData.length>0">
                   <span>商品共{{totalCount}}件</span> <span>总价{{totalPrice}}</span>
                </div> <span　class="close-shop"  @click="closeCarts">关闭</span>
           </div>
      </div>
</template>

<script>
import goodData from "../datas/goodData.js"
import "../assets/css/common.css"
import {mapState,mapGetters} from"vuex"
export default {
   data(){
        return{
            goodData
        }
    },
     computed:{
        ...mapState(["cartData"]),
        ...mapGetters(["totalCount","totalPrice"])
    },
    methods:{
        closeCarts(){
             this.$emit("closecart");
        },
        addCount(idx){
           this.$store.dispatch("changeAction",{flag:2,index:idx}); 
        },
        subCount(idx){
            this.$store.dispatch("changeAction",{flag:1,index:idx}); 
        }
    },
   
 
}
</script>

<style>
.myshop{
    font-size: 14px;
    position: absolute;
    top:60px;
    right:120px;
    background: #f8f8f8;
    z-index: 100;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #000;
    width: 400px;
    line-height: 30px;

}
.myshop .title{
    padding: 20px; 
    font-size: 20px;
    color:#666;
}
.myshop .empty{
    padding-left:20px;
    font-size: 16px;
}
.myshop .empty h3,.myshop .empty p{
    font-size: 16px;
    margin: 0px;
    padding: 0px;
}
.myshop .content{
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 50px;
}
.myshop .content span:first-child{
    display: inline-block;
    width: 60px;
    height: 60px;
}
.myshop .content img{
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
}
.myshop .content span{
    margin-left:13px;
    padding: 6px;
}
.myshop .content .item{
    padding-bottom: 10px;
    
}
.myshop .my-footer{
    padding: 30px;
}
.myshop .close-shop{
    margin-left: 200px;
    cursor: pointer;
}
</style>
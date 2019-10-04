<template>
<div @click="closeHandle">
    <div class="block">
    <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="400px">
            <el-carousel-item v-for="item,index in imgList" :key="index">
                <h3 class="small"><img :src="item.decp" /></h3>
            </el-carousel-item>
        </el-carousel>
  </div>
  <!--产品的显示  -->
  <div class="container g-piclist">
			<div class="row">
			  <div class="col-sm-6 col-md-4"v-for="item,index in goodData":key="index">
			    <div class="thumbnail" >
                    <router-link :to="'/detail/'+item.id"><img :src="item.decp" alt="..."></router-link>
			      <div class="caption u-first">
			        <h3>{{item.title}}</h3>
			        <p>{{item.price}}</p>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
</div>
</template>

<script>
// import goodData from "../datas/goodData"
import {mapState} from "vuex"
export default {
computed:{
    ...mapState(["goodData","imgList"])
},
methods:{
    closeHandle(){
        this.$store.dispatch("closePopAction");
    }
}
}
</script>

<style>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
.el-carousel__item h3 img{
    width: 100%;
}
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .g-piclist{
	margin-top: 50px;
	margin-bottom: 30px;
	padding-left: 100px;
	padding-right: 100px;
}
.g-piclist .thumbnail {
    padding: 0px;
    margin-bottom: 18px;
    margin-right: 18px;
    text-align: center;
    border: 1px solid #ddd;
    height: 360px;
}
.g-piclist .thumbnail .u-img{
	 width: 100%;
}
.g-piclist .thumbnail .u-img img{
	background-color: #FAFAFA;
	width: 100%;
}
.g-piclist>.row>div:last-of-type .thumbnail{
    margin-right: 0px;
}
.g-piclist .thumbnail h3{
	font-size: 14px;
}
.g-piclist .thumbnail p{
	font-size: 24px;
	color: #79C053;
}
.g-piclist .thumbnail:hover{
	box-shadow: 0px 4px 7px 0 rgba(180,180,180,0.50);
}
.g-piclist .thumbnail:hover .caption{
	background-color: #79C053;
	color: #fff;
}
.g-piclist .thumbnail:hover .caption p{
	color: #fff;
}
</style>

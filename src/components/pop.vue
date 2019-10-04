<template>
  <div>
      <div class="m-heimei">
			<div class="thumbnail" v-for="item in popData">
		      <img :src="item.pic" alt="...">
		      <div class="caption">
		        <h3>{{item.title}}</h3>
		        <p>{{item.price}}</p>
		      </div>
		    </div>   
  </div>
  </div>
</template>

<script>
export default {
props:["popData"]
}
</script>

<style>
.m-heimei,
.m-lanmei{
	width: 100%;
	height: 300px;
	position: absolute;
	left: 0;
	top: 80px;
	z-index: 99;
	display: flex;
	justify-content: flex-start;
	border-top: 1px solid #ccc;
	background-color: #fff;
	display: block;
	box-shadow: 0 8px 7px 0 rgba(180,180,180,0.50);
}
.m-heimei .thumbnail,
.m-lanmei .thumbnail{
	display: inline-block;
	width: 190px;
	padding: 0px;
    margin-bottom: 0px;
    border: 1px solid transparent;
    border-radius: 0px;
    text-align: center;
}
.m-heimei .thumbnail h3,
.m-lanmei .thumbnail h3{
	font-size: 10px;
}
.m-heimei .thumbnail p,
.m-lanmei .thumbnail p{
	font-size: 14px;
	color: #79C053;
}
</style>

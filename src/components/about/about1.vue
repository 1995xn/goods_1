<template>
  <div>
      <div class="container g-piclist">
			<div class="g-return">
				<div class="text"><a href="#">首页</a> > 关于我们</div>
			</div>
			<img src="../../assets/img/about/mingqian_07.png"/>
			</div>
			<div @click="chage">改变背景</div>
  </div>
</template>

<script>
export default {
methods:{
    chage(){
        this.$refs.main.style.background="red";
    }
}
}
</script>

<style>
.g-piclist{
	padding: 0 120px;
}
.g-piclist p{
	padding: 40px 45px 40px 20px;
	line-height: 30px;
	text-indent: 32px;
}
.g-piclist p.u-firstP{
	padding-bottom: 0px;
}
.g-piclist p.u-lastP{
	padding-top: 15px;
}
</style>

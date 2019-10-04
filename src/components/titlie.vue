<template>
  <div class="container hea_b">
			<ul>
				<li><h3>{{titlieName}}</h3></li>
				<li></li>
			</ul>
		</div>
</template>

<script>
export default {
    props:["titlieName"]
}
</script>

<style>
.hea_b{
	height: 120px;
}

.hea_b ul li:first-child h3{
	line-height: 90px;
	color: black;
}
.hea_b ul li:last-child{
	border-bottom: 4px solid red;
	width: 30px;
	position: relative;
	bottom: 35px;
	left: 18px;
}
</style>

<template>
  <div>
      <div class="footer container-fluid">
			<div class="row">
				<div class="u-footerL col-sm-9 col-xs-9">
					<p>客服/投诉电话：<span>400-967-7598 </span>（09:00-21:00） <span>025-69012652 </span>（09:00-21:00）</p>
					<p>公司地址：江苏省南京市江宁区双龙大道1698号景枫中心11楼</p>
					<p class="u-hLine"></p>
					<p>@2016 悠果维 江苏名芊生物科技有限公司 苏ICP备 16034991 号 账号协议 服务协议 隐私条款</p>
				</div>
				<div class="u-footerR col-sm-3 col-xs-3">
					<p class="u-sLine"></p>
					<img src="../assets/img/shop/qrcode.png"/><p>关注微信获取更多信息</p>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
	background-color: #79C053;
	width: 100%;
	color: #fff;
	font-size: 13px;
	padding: 25px 170px;
	letter-spacing: 1px;
	position: relative;
}
.footer span{
	font-size: 16px;
	margin-left: 33px;
}
.footer .u-hLine{
	height: 1px;
	width: 720px;
	background-color: #86D55D;
	margin-top: 15px;
	margin-bottom: 40px;
}
.u-footerR .u-sLine{
	display: inline-block;
	height: 90px;
	width: 1px;
	margin-right: 85px;
	margin-top: 20px;
	background-color: #86D55D;
}
.u-footerR img{
	height: 70px;
	width: 70px;
	margin-top: -120px;
}
.u-footerR img+p{
	font-size: 10px;
	margin-left: 70px;
	margin-top: -20px;
}
.thumbnail{
	cursor: pointer;
}

</style>

<template>
	<!-- 头部订单状态 -->
	<view class="status-box">
		<view class="status-one"> 
		   <image  :src="orderStatus?'/static/imgs/dengdai.png':'/static/imgs/dengdai1.png'" mode=""></image>
		   <text>等待买家付款</text>
		</view>
		<view class="status-two">
			<view class="">
				需付款:
				<text>¥3590.00</text>
				剩余时间:
				<text>23小时33分钟</text>
			</view>
		<!-- 	<view class="">
				<text>10日23小时33分钟后系统自动确认退款</text>
			</view>
			<view class="">
			   取消原因：
				<text>超时未支付</text>
			</view> -->
		</view>
		<view class="status-three">
			<view class="buttn">
				去支付
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderStatus:false,
			}
		}
	}
</script>

<style lang="scss">
	.status-box {
		height:280upx;
		background:linear-gradient(90deg,rgba(246,35,10,1),rgba(247,155,144,1));
		.status-one {
		    padding-top: 20upx;
			font-size:36upx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(255,255,255,1);
			text-align: center;
			height: 46upx;
			line-height: 46upx;
			image {
			 margin-right: 10upx;
			 vertical-align:middle;
			 width: 46upx;
			 height: 46upx;
			}
			
		}
		.status-two {
			margin: 40upx 0;
			text-align: center;
			font-size:26upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
			text {
				margin: 0 20upx;
			}
		}
		.status-three {
			font-size:26upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(231,2,2,1);
			.buttn {
				text-align: center;
				width:180upx;
				height:54upx;
				line-height: 54upx;
				background:rgba(255,255,255,1);
				border-radius:27upx;
				margin: 0 auto;
			}
		}
	}
</style>

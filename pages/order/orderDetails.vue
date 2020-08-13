<template>
	<view class="details-box">
      <orderStatus></orderStatus>
	  <!-- 地址 -->
	  <view class="address-box">
	  	<view class="name">
			<view>
				<text>木木</text>
				<text>1368458563</text>
			</view>
	  	<text class="yticon icon-you"></text>
	  	</view>
		<view class="address">
			<text>地址：天津西青区全境 华苑产业园区 迎水道 148号 天业大厦D座 1112</text>
		</view>
	  </view>
	  <!-- 商品 -->
	  <view class="goods-box">
		<view class="goods-store">
			<view class="goods-name">
			  <image src="/static/dianpu.png" mode=""></image>
			  <text>万宝龙官方旗舰店</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="goods-message">
			<view class="content-image">
				<image src="https://img20.360buyimg.com/jdcms/s150x150_jfs/t1/115259/27/10890/365448/5ef44931E564774ec/05c13b8b914adaeb.jpg.webp" mode=""></image>
			</view>
			<view class="goods-content">
				<view class="content-name">MONTBLANC 万宝龙 大班系列签字笔 163/112 678</view>
				<!-- <view class=""></view> -->
				<view class="content-price">
					<text>¥ 6900.00</text>
					<text>x 1</text>
				</view>
			</view>
		</view>
		<view class="goods-message">
			<view class="content-image">
				<image src="https://img20.360buyimg.com/jdcms/s150x150_jfs/t1/115259/27/10890/365448/5ef44931E564774ec/05c13b8b914adaeb.jpg.webp" mode=""></image>
			</view>
			<view class="goods-content">
				<view class="content-name">MONTBLANC 万宝龙 大班系列签字笔 163/112 678</view>
				<!-- <view class=""></view> -->
				<view class="content-price">
					<text>¥ 6900.00</text>
					<text>x 1</text>
				</view>
			</view>
		</view>
	  </view>
	  
	  
	  <!-- 客服 -->
	  <view class="service">
	  	<image src="/static/imgs/message2.png" mode=""></image>
		<text>PLUS专属客服</text>
	  </view>
	  <!-- 订单信息 -->
	  <view class="orderid-box">
	  	<view class="orderid">
			<text class="head">订单编号：</text>
			<text>105860486</text>
			<text class="copy">复制</text>
		</view>
		<view class="">
			<text class="head">下单时间：</text>
			<text>2019-11-08</text>
		</view>
		<view class="">
			<text class="head">支付方式：</text>
			<text>微信支付</text>
		</view>
	  </view>
	  <!-- 商品总价格 -->
	  <view class="aggregate">
	  	<view class="totalPrice">
			<text>商品总额</text>
			<text>¥ 61.80</text>
	  	</view>
		<view class="freight">
			<text>运费</text>
			<text>+ ¥ 6.00</text>
		</view>
		<view class="volume">
			<text>运费券</text>
			<text>- ¥ 6.00</text>
		</view>
		<view class="practical">
			<text>需付款</text>
			<text>￥6900.00</text>
		</view>
	  </view>
	  <!-- 底部 -->
	  <view class="Bottom">
	  	<view class="Bottom-button">取消订单</view>
	  	<view class="Bottom-button2">去支付</view>
	  </view>
	</view>
</template>

<script>
	import orderStatus from "./components/orderStatus";
	export default {
		components: {
			orderStatus
		},
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}
.details-box {
	.icon-you {
		font-size: $font-lg;
		color: $font-color-light;
		flex: 1;
		text-align: right;
	}
	.Bottom {
		display:flex;
		justify-content : flex-end;
		width:750upx;
		height:166upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		text-align: center;
		.Bottom-button {
			margin: 30upx;
			width:170upx;
			height:55upx;
			line-height: 55upx;
			background:rgba(255,255,255,1);
			border:1px solid rgba(153,153,153,1);
			border-radius:27upx;
			
			font-size:26upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(153,153,153,1);
		}
		.Bottom-button2 {
			margin: 30upx;
			width:156upx;
			height:55upx;
			line-height: 55upx;
			background:linear-gradient(90deg,rgba(246,35,10,1),rgba(247,155,144,1));
			border-radius:27upx;
			
			font-size:26upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(255,255,255,1);
		}
	}
	.aggregate {
		display:flex;
		flex-direction:column;
		justify-content : space-between;
		margin: 20upx 0;
		padding: 16upx 20upx;
		
		width:750upx;
		height:228upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		.totalPrice {
			display:flex;
			justify-content : space-between;
		}
		.freight {
			display:flex;
			justify-content : space-between;
		}
		.volume {
			display:flex;
			justify-content : space-between;
		}
		.practical {
			display:flex;
			justify-content : flex-end;
		}
	}
	.orderid-box {
		display:flex;
		flex-direction:column;
		justify-content : space-around;
		
		margin: 20upx 0;
		padding: 0 20upx;
		width:748upx;
		height:184upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		.head {
			font-size:22upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
		}
		.copy {
			margin-left: 20upx;
			padding: 4upx 10upx;
			background:rgba(249,249,249,1);
			border-radius:6upx;
		}
	}
	.service {
		margin: 20upx 0;
		text-align: center;
		width:750upx;
		height:76upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		line-height: 76upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		image {
			vertical-align:middle;
			margin-right: 10upx;
			width: 30upx;
			height: 30upx;
		}
	}
	.goods-box {
		margin: 20upx 0;
		padding: 0 20upx;
		width:750upx;
		// height:316upx;
		background:rgba(255,255,255,1);
		border-radius:10upx;
		.goods-message {
			display:flex;
			padding: 20upx 0;
			.content-image {
				width:200upx;
				height:205upx;
				background:rgba(255,255,255,1);
				border-radius:10rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		.goods-content {
			display:flex;
			flex-direction:column;
			justify-content : space-between;
			margin-left: 10rpx;
			.content-name {
				font-size:22upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
			}
			.content-price {
				display:flex;
				justify-content : space-between;
				
				text:first-child {
					font-size:28upx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(254,0,0,1);
				}
				text:nth-child(2) {
					font-size:20upx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(51,51,51,1);
				}
				
			}
		}
		.goods-store {
			display:flex;
			justify-content : space-between;
			height: 80upx;
			line-height: 80upx;
			.goods-name {
				font-size:22upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);

				image {
					vertical-align:middle;
					margin-right: 16upx;
					width: 24upx;
					height: 24upx;
				}
			}
		}
	}
	.address-box {
		padding: 0 30upx;
		width:750upx;
		height:146upx;
		background:rgba(255,255,255,1);
		border-radius:6upx;
		.name {
			padding-top: 10upx;
			font-size:26upx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(51,51,51,1);
			display:flex;
			justify-content : space-between;
			text:first-child {
				margin-right: 10upx;
			}
		}
		.address {
			margin-top: 20upx;
			margin-right: 14upx;
			font-size:22upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
		}
	}
}
</style>

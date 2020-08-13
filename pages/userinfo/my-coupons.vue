<template>
	<view class="coupon-box">
		<view class="coupon-head">
			<text @click="tab(1)" :class="Handover==1?'on':''">可使用</text>
			<text @click="tab(2)" :class="Handover==2?'on':''">已使用</text>
			<text @click="tab(3)" :class="Handover==3?'on':''">已过期</text>
		</view>
        
		<view class="activity-item">
			<view class="activity-head">
		       <view class="price"><text class="money">￥</text>20</view>
		       <view class="fullness">满499元可用</view>
			</view>
			<view class="activity-body">
		         <view class="coupon-name">【MONTBLANC旗舰店】店铺商品</view>
		         <view class="coupon-scope">仅本店适用</view>
		         <view class="coupon-receive">
					 <text class="receive-time">2020.02.30 ~ 2020.4.31</text>
					 <text class="receive-button">领取</text>
				 </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Handover: 1,
			}
		},
	
		onLoad() {},
	
		methods: {
			onChange(d) {
				console.log(d)
			},
			tab(e) {
				this.Handover = e
			}
		}
	}
</script>

<style lang='scss'>
	.coupon-box {
		.coupon-head {
			height: 90upx;
			background-color: #FFFF;
			display: flex;
			justify-content: space-around;

			text {
				padding: 20upx 0;
				font-size: 30upx;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
				/* border-bottom:4upx solid #E70202; */
			}

			.on {
				padding: 20upx 0;
				font-size: 30upx;
				font-weight: bold;
				color: #E70202;
				border-bottom: 4upx solid #E70202;
			}
		}
		
		.activity-item {
			display:flex;
			/* padding: 20upx 0; */
			/* // width: 690upx; */
			margin: 20upx 20upx;
			height: 190upx;
			background: rgba(255, 255, 255, 1);
			border: 1px solid rgba(255, 153, 0, 1);
			border-radius: 10px;
			overflow: hidden;
		    /* // position: relative; */
			.activity-head {
				
				width: 220upx;
				height: 190upx;
				background: linear-gradient(135deg, rgba(246, 35, 10, 1), rgba(255, 153, 0, 1));
				// background-color:  #FF9900;
			    // content: '';
			    // position: absolute;
			    // top: 0px;
			    // bottom: 0px;
			    // left: 0px;
			    // background: radial-gradient(circle, #fff, #fff 4upx, transparent 6upx);
			    // background-size: 10upx 10upx;
				.price {
					// line-height: 190upx;
					padding: 20upx 0;
					text-align: center;
					font-size:60upx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(255,255,255,1);
				}
				.money {
					font-size:26upx;
					font-weight:400;
				}
				.fullness {
					// margin: 0 auto;
					text-align: center;
					font-size:26upx;
					font-family:PingFang SC;
					font-weight:400;
					color:rgba(255,255,255,1);
				}
			}
		
			.activity-body {
				margin-left: 8upx;
				display:flex;
				flex-direction:column; 
				justify-content : space-between;
				.coupon-name {
					font-size:30upx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(255,153,0,1);
				}
				.coupon-scope {
					font-size:20upx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(255,153,0,1);
				}
				.coupon-receive {
					height: 60upx;
					line-height: 60upx;
					display:flex;
					justify-content : space-between;
					border-top:1px solid rgba(255,153,0,1);
					.receive-time {
						font-size:20upx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(255,153,0,1);
					}
					.receive-button {
					    margin: 10upx 0;
						line-height: 34upx;
						padding: 0upx 24upx;
						border:1px solid rgba(255,153,0,1);
						border-radius:21px;
						font-size:20upx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(255,153,0,1);
					}
				}
			}
		
		}
	}
</style>

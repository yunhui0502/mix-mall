<template>
	<view class="coupon-box">
		<view class="coupon-head">
			<text @click="tab(1)" :class="Handover==1?'on':''">商品</text>
			<text @click="tab(2)" :class="Handover==2?'on':''">店铺</text>
			<view>
				<image src="/static/imgs/slices/sousuo1.png" mode=""></image>
				<text>编辑</text>
			</view>
		</view>

		<!-- 一行一个的 -->
		<view v-if="!Hidden" class="goods-two-list">
			 <view v-for="(item1, index) in 2" :key="index" class="goods-two-item">
				 <view class="image-two-wrapper">
				 	<image src="https://img12.360buyimg.com/jdcms/s150x150_jfs/t1/136942/25/5302/160076/5f1a8b6eE59ffbba8/e7e302f70405155e.jpg.webp" mode="scaleToFill"></image>
				 </view>
				 <view class="goods-title f40">
				 	<text class="title clamp">MONTBLANC 万宝龙 大班系列签字笔 163/112 678</text>
				 	<view class="price-box">
				 		<text class="price">100.00</text>
				 	</view>
				 	<text class="marlboro">万宝龙官方旗舰店   
				 	<text class="baguette">进店  <text class="yticon icon-you"></text></text></text>
				 </view>
		     </view>
		</view>

		<view v-if="Hidden" class="">
			<scroll-view scroll-x direction="horizonta" style="margin-top: 30rpx;" >
				<view class="content-card">
					<view class="content-item">
						<image src="/static/imgs/slices/guanzhuwomen.png" mode=""></image>
						<view>
							<text style="font-size:26upx;font-family:PingFang SC;font-weight:bold;color:rgba(51,51,51,1);">
								万宝龙官方旗舰店
							</text>
							<text style="font-size:24upx;font-family:PingFang SC;font-weight:500;color:rgba(153,153,153,1);">
								546.1万人关注
							</text>
						</view>

					</view>

					<view class="hid-item" style="background:rgba(255,204,0,1);">
						<view style="width:50rpx;color:white">取消关注</view>
					</view>
					<view class="hid-item" style="background:rgba(255,0,0,1);">
						<view style="width:50rpx;color:white;">置顶店铺</view>
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				Handover: 1,
				Hidden:false
			}
		},

		onLoad() {},

		methods: {
			tab(e) {
				this.Handover = e
				this.Hidden = !this.Hidden
			}
		}
	}
</script>

<style lang='scss'>
	page {
		background-color: #F6F6F6;
	}

	  .content-card{
		width:100%;
		height: 140rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 34rpx;
		box-sizing:border-box;
		background-color: #FFFF;
		.content-item{
		   /* width: 615rpx; */
		  height: 100%;
		  display: flex;
		  justify-content: flex-start;
		  margin-right:68rpx;
         image {
			  height: 100upx;
			  width: 100upx;
			  margin-top: 20upx;
		  }
		/*  .scoll-wrapper {
			  width: 200upx;
		  } */
		  view {
			  margin-top: 36upx;
			  width: 540upx;
			  margin-left: 10upx;
			  display:flex;
			  flex-direction:column;
		  }
		}
		.hid-item{
		 height:100%;
		background:rgba(240,240,240,1);
		padding: 30rpx 30rpx;
		box-sizing: border-box;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(21,21,21,1);
		}
	  }
	  
	.f40 {
		width: 60%;
		border-bottom: 1px solid #E5E5E5;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.icon-you {
		font-size: 22upx;
		color: $font-color-light;
		margin-left: 6upx;
	}

	.goods-two-item {
		display: flex;
		background-color: #FFFF;
	}

	.goods-two-list {
		margin-top: 20upx;

		.image-two-wrapper {
			width: 260upx;
			height: 260upx;
			margin: 20upx 0;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.goods-title {
			padding: 0 10rpx;

			.title {
				font-size: $font-lg;
				color: $font-color-dark;
				line-height: 80upx;
			}

			.price-box {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-right: 10upx;
				font-size: 24upx;
				color: $font-color-light;

				.price {
					font-size: $font-lg;
					line-height: 1;
					font-family: Gilroy;
					font-weight: 500;
					color: rgba(254, 0, 0, 1);

					&:before {
						content: '￥';
						font-size: 26upx;
					}
				}
			}

			.marlboro {
				font-size: 20upx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(138, 138, 138, 1);

				.baguette {
					font-size: 20upx;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1);
					margin-left: 30upx;

				}
			}
		}
	}

	.coupon-box {
		.coupon-head {
			height: 90upx;
			line-height: 90upx;
			background-color: #FFFF;
			display: flex;
			justify-content: space-around;

			image {
				width: 30upx;
				height: 30upx;
				margin-right: 10upx;
			}

			view {
				padding: 20upx 0;
				font-size: 30upx;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}

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
	}
</style>

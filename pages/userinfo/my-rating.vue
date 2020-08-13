<template>
	<view class="coupon-box">
		<view class="coupon-head">
			<text @click="tab(1)" :class="Handover==1?'on':''">待评价 38</text>
			<text @click="tab(2)" :class="Handover==2?'on':''">已评价/追评</text>
		</view>
		
		<view v-if="Handover==1" class="goods-item">
			<view class="goods-img">
				<image src="https://img12.360buyimg.com/jdcms/s150x150_jfs/t1/120698/34/6624/142981/5f0566a0E56d01764/6c7e62787ee60daa.jpg.webp" mode=""></image>
			</view>
			<view class="goods-body">
				<text>MONTBLANC 万宝龙 大班系列签字笔 163/112678</text>
				<view class="Bottom">
					<view>评价</view>
				</view>
			</view>
		</view>
		
		<view  v-if="Handover==2" class="">
			<view class="goods-item">
				<view class="goods-img">
					<image src="https://img12.360buyimg.com/jdcms/s150x150_jfs/t1/120698/34/6624/142981/5f0566a0E56d01764/6c7e62787ee60daa.jpg.webp" mode=""></image>
				</view>
				<view class="goods-body">
					<text>MONTBLANC 万宝龙 大班系列签字笔 163/112678</text>
			         <view class="evaluate">
						 <image src="/static/rate/star.png" mode=""></image>
						 <image src="/static/rate/star.png" mode=""></image>
						 <image src="/static/rate/star.png" mode=""></image>
						 <image src="/static/rate/star_empty.png" mode=""></image>
						 <image src="/static/rate/star_empty.png" mode=""></image>
			         </view>
				</view>
			</view>
			<view class="bottom-box">
				<text>笔真的好，手感很不错，买了第二支了是送人的！对方很喜欢，非常有 面子</text>
				<view style="display:flex;justify-content : flex-end;">
					<view class="Bottom">
						<view>查看评价</view>
					</view>
				</view>
				
			</view>
		</view>

	</view>
</template>

<script>
	import rate from '../../components/rate.vue'
	export default {
		components: {
			rate
		},
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
	page {
	 background-color: #F6F6F6;
	}
	.evaluate {
		image {
			width: 36upx;
			height: 36upx;
		}
	}
	.bottom-box {
		margin-bottom: 20upx;
		background-color: #FFFF;
		padding: 20upx 30upx;
		font-size:22upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		.Bottom {
			text-align: center;
			width:136upx;
			height:46upx;
			line-height: 46upx;
			border:1px solid rgba(231,2,2,1);
			border-radius:23upx;
			font-size:24upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(231,2,2,1);
		}
	}
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
		.goods-item {
		  display:flex;
			
		  margin-top: 20upx;
		  padding: 30upx;
		  width:750upx;
		  height:260upx;
		  background:rgba(255,255,255,1);
		  border-radius:6upx;
		  .goods-img {
			  width:200upx;
			  height:205upx;
			  image {
				  width: 100%;
				  height: 100%;
			  }
		  }
		  .goods-body {
			  display:flex;
			  flex-direction:column;
			  justify-content : space-between;
			  margin-left: 14upx;
			  font-size:22upx;
			  font-family:PingFang SC;
			  font-weight:500;
			  color:rgba(51,51,51,1);
			  .Bottom {
				  display:flex;
				  justify-content : flex-end;
				  view{
					  width:136upx;
					  height:46upx;
					  border:1px solid rgba(231,2,2,1);
					  border-radius:23upx;
					  text-align: center;
					  color: #E70202;
				  }
				  
			  }
		  }
		}
	}
</style>

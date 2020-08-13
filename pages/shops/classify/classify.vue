<template>
	<view class="shops-box">
		<view class="shops-head">
			<view class="shops-message">
				<view style="display:flex;" class="">
					<view class="shops-image">
						<image src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/96c2f5e3e09fac690a937f910ebb96fa_121_121.jpg"></image>
					</view>
					<view class="shops-text">
						<view>万宝龙自营专区<text class="yticon icon-you"></text></view>
						<view>
							<image class="Shops-ziying" src="/static/etails-icon/dpziying.png" /></text><text>113.3万人关注</text></view>
					</view>
				</view>
				<view class="attention">
					<image class="attention-guanzhu" src="/static/imgs/guanzhu.png" /><text>关注</text>
				</view>
			</view>
			<view class="Home-tab">
				<view @click="tabClick(0)" class="Home-item" :class="Selected==0?'Selected':''">综合</view>
				<view @click="tabClick(1)" class="Home-item" :class="Selected==1?'Selected':''">销量</view>
				<view @click="tabClick(3)" class="Home-item" :class="Selected==2?'Selected':''">价格</view>
				<view @click="clickSelected()" class="Home-item">
					<image style="width: 34upx;height: 34upx;" src="/static/imgs/pailiebai.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="classify-content">
			<view class="classify-item p30">
				<view class="item-head">
					<text class="head-text">活动专区</text>
					<text class="yticon icon-you"></text>
				</view>
				<view class="item-body">
					<view class="item" v-for="(item,i) in 4" :key="i">
						男装
					</view>
				</view>
			</view>
		</view>
		<view style="height: 48px;">
			
		</view>
		<tabBar :currentPage="currentPage"></tabBar>
	</view>
</template>

<script>
	import tabBar from '../tabBar/tabBar.vue';
	export default {
		components: {
			tabBar
		},
		data() {
			return {
				currentPage: '/pages/shops/classify/classify',
				Selected: 0,

				filterIndex: 0,
				priceOrder: 0, //1 价格从低到高 2价格从高到低
				Hidden: false,
				goodsList: []
			}
		},
		onLoad(option) {
			//商品数据
			//let data = JSON.parse(option.data);
			//console.log(data);
		},
		methods: {
			clickSelected(e) {
				this.Hidden = !this.Hidden;
			},
			toggleCateMask() {
				this.Hidden = !this.Hidden;
			},
			//筛选点击
			tabClick(index) {
				this.Selected = index
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}
	// 样式
	.classify-content {
		margin-top: 20rpx;
		.icon-you {
			font-size: $font-lg;
			color: #333333;
			flex: 1;
			text-align: right;
		}
		.p30 {
			padding: 0 30upx;
			margin-bottom: 20upx;
		}
		.classify-item {			
			background:rgba(255,255,255,1);
			border-radius:10px;
			.item-head {
				display:flex;
				justify-content : space-between;
				.head-text {
					border-left:4upx solid red;
					padding: 0 10upx;
					font-size:24upx;
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(51,51,51,1);
				}
			}
			.item-body {
				padding: 20upx 0;
				display:flex;
				flex-wrap: wrap;
				justify-content : space-between;
				.item {
					width:220upx;
					height:60upx;
					background:rgba(248,248,248,1);
					border-radius:6upx;
					text-align: center;
					font-size:22upx;
					font-family:PingFang SC;
					font-weight:500;
					color:rgba(51,51,51,1);
					line-height:30px;
					margin-bottom: 20upx;
				}
			}
		}
		
	}

	// 头部样式
	.icon-you {
		font-size: 32upx;
		// color: $font-color-light;
		color: #FFFF;
		// margin-right: 30upx;
	}

	.shops-box {

		.shops-head {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			background-image: url(/static/imgs/dianp.png);
			background-size: 100% 100%;
			width: 100%;
			height: 320upx;
			padding: 0 30upx;

			.shops-message {
				padding-top: 90upx;
				display: flex;
				justify-content: space-between;

				.shops-image {
					width: 100upx;
					height: 100upx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.shops-text {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					margin-left: 10rpx;
					font-size: 30upx;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(255, 255, 255, 1);

					.Shops-ziying {
						background-color: #FFFF;
						width: 52upx;
						height: 28upx;
						margin-left: 10rpx;
					}
				}

				.attention {
					margin-top: 10rpx;
					width: 118upx;
					height: 46upx;
					line-height: 46upx;
					font-size: 22upx;
					color: rgba(255, 255, 255, 1);
					border-radius: 100upx;

					background: linear-gradient(135deg, rgba(246, 35, 10, 1), #F46A59);

					.attention-guanzhu {
						width: 30rpx;
						height: 30rpx;
					}

					image {
						vertical-align: middle;
						display: inline-block;
						margin: 0 10upx;
						width: 100%;
						height: 100%;
					}
				}
			}
		}

		.Home-tab {
			margin: 14upx 0;
			display: flex;
			justify-content: space-between;
			font-size: 30upx;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
            .Home-item {
				display: flex;
				line-height: 40upx;
				padding: 17upx 0;
				margin-top: 20upx;
			}
			// text {
			// 	padding: 17upx 0;
			// 	margin-top: 20upx;
			// }

			.Selected {
				padding: 17upx 0;
				margin-top: 20upx;
				border-bottom: 6upx solid #FFFF;
			}
		}

	}
</style>

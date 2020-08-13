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

		<view class="shops-content">
			<!-- 商品列表 -->
			<wlpListGood style="margin-top: 8px;" :Hidden="Hidden" :goodsList="goodsList"></wlpListGood>
		</view>
		<view style="height: 48px;">
			
		</view>
		<tabBar :currentPage="currentPage"></tabBar>
	</view>
</template>

<script>
	import tabBar from '../tabBar/tabBar.vue';
	import wlpListGood from '@/components/wlp-list-good/wlp-list-good.vue';
	export default {
		components: {
			tabBar,
			wlpListGood
		},
		data() {
			return {
				currentPage: '/pages/shops/goods-list/goods',
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
				if (this.filterIndex === index && index !== 2) {
					return;
				}
				this.filterIndex = index;
				if (index === 2) {
					this.priceOrder = this.priceOrder === 1 ? 2 : 1;
				} else {
					this.priceOrder = 0;
				}
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			//加载商品 ，带下拉刷新和上滑加载
			async loadData(type = 'add', loading) {
				//没有更多直接返回
				if (type === 'add') {
					if (this.loadingType === 'nomore') {
						return;
					}
					this.loadingType = 'loading';
				} else {
					this.loadingType = 'more'
				}

				let goodsList = await this.$api.json('goodsList');
				if (type === 'refresh') {
					this.goodsList = [];
				}
				//筛选，测试数据直接前端筛选了
				if (this.filterIndex === 1) {
					goodsList.sort((a, b) => b.sales - a.sales)
				}
				if (this.filterIndex === 2) {
					goodsList.sort((a, b) => {
						if (this.priceOrder == 1) {
							return a.price - b.price;
						}
						return b.price - a.price;
					})
				}

				this.goodsList = this.goodsList.concat(goodsList);

				//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
				this.loadingType = this.goodsList.length > 20 ? 'nomore' : 'more';
				if (type === 'refresh') {
					if (loading == 1) {
						uni.hideLoading()
					} else {
						uni.stopPullDownRefresh();
					}
				}
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}

	// 头部样式
	.icon-you {
		font-size: 32upx;
		// color: $font-color-light;
		color: #FFFF;
		margin-right: 30upx;
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

		.shops-content {
			// padding: 0 30upx;
		}
	}
</style>

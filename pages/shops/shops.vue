<template>
	<view class="shops-box">
		<view class="shops-head">
			<view class="shops-message">
				<view style="display:flex;" class="">
					<view class="shops-image">
						<image src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/96c2f5e3e09fac690a937f910ebb96fa_121_121.jpg"></image>
					</view>
					<view class="shops-text">
						<view>万宝龙自营专区 <text class="yticon icon-you"></text></view>
						<view>
							<image class="Shops-ziying" src="/static/etails-icon/dpziying.png" /></text><text>113.3万人关注</text></view>
					</view>
				</view>
				<view class="attention">
					<image class="attention-guanzhu" src="/static/imgs/guanzhu.png" /><text>关注</text>
				</view>
			</view>
			<view class="Home-tab">
				<text @click="clickSelected(0)" :class="Selected==0?'Selected':''">精选</text>
				<text @click="clickSelected(1)" :class="Selected==1?'Selected':''">商品</text>
				<text @click="clickSelected(2)" :class="Selected==2?'Selected':''">活动</text>
				<text @click="clickSelected(3)" :class="Selected==3?'Selected':''">上新</text>
				<text @click="clickSelected(4)" :class="Selected==4?'Selected':''">动态</text>
			</view>
		</view>

		<view class="shops-content">
			<view v-if="Selected==0">0</view>
			<!-- 商品 -->
			<view v-if="Selected==1">
				<!-- 头 -->
				<view class="navbar">

					<view class="nav-item" :class="{current: filterIndex === 0}" @click="tabClick(0)">
						综合
					</view>
					<view class="nav-item" :class="{current: filterIndex === 1}" @click="tabClick(1)">
						销量
					</view>
					<view class="nav-item" :class="{current: filterIndex === 2}" @click="tabClick(2)">
						<text>价格</text>
						<view class="p-box">
							<text :class="{active: priceOrder === 1 && filterIndex === 2}" class="yticon icon-shang"></text>
							<text :class="{active: priceOrder === 2 && filterIndex === 2}" class="yticon icon-shang xia"></text>
						</view>
					</view>
					<view class="cate-item" @click="toggleCateMask()">
						<image v-if="!Hidden" class="attention-guanzhu" src="/static/imgs/pailie.png" />
						<image v-if="Hidden" class="attention-guanzhu" src="/static/imgs/pailie1.png" />
					</view>
				</view>
				<!-- 商品列表 -->
				<wlpListGood style="margin-top: 8px;" :Hidden="Hidden" :goodsList="goodsList"></wlpListGood>
			</view>
			<!-- 活动 -->
			<view class="activity-coupon" v-if="Selected==2">
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
			<!-- 上新品 -->
			<view v-if="Selected==3">
				<!-- 头 -->
				<view class="navbar">
			
					<view class="nav-item" :class="{current: filterIndex === 0}" @click="tabClick(0)">
						综合
					</view>
					<view class="nav-item" :class="{current: filterIndex === 1}" @click="tabClick(1)">
						销量
					</view>
					<view class="nav-item" :class="{current: filterIndex === 2}" @click="tabClick(2)">
						<text>价格</text>
						<view class="p-box">
							<text :class="{active: priceOrder === 1 && filterIndex === 2}" class="yticon icon-shang"></text>
							<text :class="{active: priceOrder === 2 && filterIndex === 2}" class="yticon icon-shang xia"></text>
						</view>
					</view>
					<view class="cate-item" @click="toggleCateMask()">
						<image v-if="!Hidden" class="attention-guanzhu" src="/static/imgs/pailie.png" />
						<image v-if="Hidden" class="attention-guanzhu" src="/static/imgs/pailie1.png" />
					</view>
				</view>
				<!-- 商品列表 -->
				<wlpListGood style="margin-top: 8px;" :Hidden="Hidden" :goodsList="goodsList"></wlpListGood>
			</view>
			<!-- 动态 -->
			<view class="dynamic-box" v-if="Selected==4">
				<view class="dynamic-hint">
					“下面是我店的动态，欢迎查看”
				</view>
				
				<view class="dynamic-one">
					<view class="one-time">11月08日  10:48:25</view>
					<view class="one-goods">
						<view class="goods-left">
							<image src="https://img20.360buyimg.com/mobilecms/s220x220_jfs/t1/74654/24/9172/186922/5d6f503aEdec92969/175e32782834affa.jpg!cc_220x220.webp"></image>
						</view>
						
						<view class="goods-right">
							<view class="one-name">
								MONTBLANC万宝龙 大班系列签字笔 163/12890MONTBLANC万宝龙 </view>
							<view class="one-comment">
								<text>156</text>
								<image src="/static/imgs/message.png"></image>
								
								<text>156</text>
								<image src="/static/imgs/dianzan-copy.png"></image>
							</view>
						</view>

					</view>
				</view>
				
				<view class="dynamic-many">
					<view class="many-time">11月08日  10:48:25</view>
					<text>MONTBLANC万宝龙 大班系列签字笔 163/12890 MONTBLANC万宝 龙 大班系列签字笔 163/12890</text>
					<view class="many-image">
						<view class="many-item" v-for="(item,i) in 9" :key="i">
							<image src="https://img20.360buyimg.com/mobilecms/s220x220_jfs/t1/74654/24/9172/186922/5d6f503aEdec92969/175e32782834affa.jpg!cc_220x220.webp"></image>
						</view>
					</view>
					<view class="many-comment">
						<text>156</text>
						<image src="/static/imgs/message.png"></image>
						<text>156</text>
						<image src="/static/imgs/dianzan-copy.png"></image>
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
	import tabBar from './tabBar/tabBar.vue';
	import wlpListGood from '@/components/wlp-list-good/wlp-list-good.vue';
	export default {
		components: {
			tabBar,
			wlpListGood
		},
		data() {
			return {
				currentPage: '/pages/shops/shops',
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
				this.Selected = e
			},
			toggleCateMask() {
				this.Hidden = !this.Hidden;
			},
			//筛选点击
			tabClick(index) {
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
    // 动态样式
	.dynamic-box {
		.dynamic-hint {
			text-align: center;
			height:64upx;
			background:rgba(255,255,255,1);
			border:1px solid rgba(249,249,249,1);
			box-shadow:0px 0px 8px 1px rgba(107,107,107,0.08);
			margin-bottom: 23upx;
			line-height: 64upx;
			font-size:20upx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(153,153,153,1);
		}
		.dynamic-one {
			padding: 0 20upx;
			padding-bottom: 20upx;
			margin-bottom: 20upx;
			height:280upx;
			background:rgba(255,255,255,1);
			border-radius:10upx;
			.one-time {
				height: 58upx;
				line-height: 58upx;
				font-size:20upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
			}
			.one-goods {
				display:flex;
				.goods-left {
					margin-right: 30upx;
					image {
						width: 194upx;
						height: 194upx;
					}
				}
				.goods-right {
					display:flex;
					flex-direction:column;
					justify-content : space-between;
					.one-name {
						font-size:22upx;
						font-family:PingFang SC;
						font-weight:500;
						color:rgba(51,51,51,1);
					}
					.one-comment {
						display:flex;
						justify-content : flex-end;
						font-size:18upx;
						font-family:Gilroy;
						font-weight:500;
						color:rgba(51,51,51,1);
						image {
							width: 24upx;
							height: 100%;
						}
						text {
							margin: 0 16upx;
						}
					}
				}
			}
		}
		.dynamic-many {
			padding: 0 20upx;
			padding-bottom: 20upx;
			margin-bottom: 20upx;
			height:900upx;
			background:rgba(255,255,255,1);
			border-radius:10upx;
			
			font-size:22upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
			
			.many-time {
				height: 58upx;
				line-height: 58upx;
				font-size:20upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(153,153,153,1);
			}
			.many-image {
				margin-top: 20upx;
				display:flex;
				flex-wrap: wrap;
				justify-content : space-between;
				.many-item {
					width: 220upx;
					height: 220upx;
					margin-bottom: 20upx;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
			.many-comment {
				display:flex;
				justify-content : flex-end;
				font-size:18upx;
				font-family:Gilroy;
				font-weight:500;
				color:rgba(51,51,51,1);
				image {
					width: 26upx;
					height: 26upx;
				}
				text {
					margin: 0 16upx;
				}
			}
		}
	}
	
	// 活动部分样式
	.activity-coupon {
		padding: 20upx 20upx 0 20upx;

		.activity-item {
			display:flex;
			// width: 690upx;
			height: 190upx;
			background: rgba(255, 255, 255, 1);
			border: 1px solid rgba(255, 153, 0, 1);
			border-radius: 10px;
			overflow: hidden;
            // position: relative;
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

	// 商品部分样式
	.navbar {
		// margin-top: 44px;
		position: relative;
		left: 0;
		// top: var(--window-top);
		display: flex;
		// width: 100%;
		height: 80upx;
		background: #fff;
		box-shadow: 0 2upx 10upx rgba(0, 0, 0, .06);
		z-index: 10;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
			color: $font-color-dark;
			position: relative;

			&.current {
				color: $base-color;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 120upx;
					height: 0;
					border-bottom: 4upx solid $base-color;
				}
			}
		}

		.p-box {
			display: flex;
			flex-direction: column;

			.yticon {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 30upx;
				height: 14upx;
				line-height: 1;
				margin-left: 4upx;
				font-size: 26upx;
				color: #888;

				&.active {
					color: $base-color;
				}
			}

			.xia {
				transform: scaleY(-1);
			}
		}

		.cate-item {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 80upx;
			position: relative;
			font-size: 44upx;

			image {
				width: 36upx;
				height: 34upx;
			}

			&:after {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				border-left: 1px solid #ddd;
				width: 0;
				height: 36upx;
			}
		}
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

			text {
				padding: 17upx 0;
				margin-top: 20upx;
			}

			.Selected {
				border-bottom: 6upx solid #FFFF;
			}
		}

		.shops-content {
			// padding: 0 30upx;
		}
	}
</style>

<template>
	<view class="content">
		<!-- 		<view class="search">
			sss
		</view> -->
		<view class="navbar" :style="{position:headerPosition,top:headerTop}">

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
			<text class="cate-item yticon icon-fenlei1" @click="toggleCateMask('show')"></text>
		</view>
		<!-- 商品列表 -->
		<wlpListGood style="margin-top: 44px;" :Hidden="Hidden" :goodsList="goodsList"></wlpListGood>

		<uni-load-more :status="loadingType"></uni-load-more>

		<view class="cate-mask" :class="cateMaskState===0 ? 'none' : cateMaskState===1 ? 'show' : ''" @click="toggleCateMask">
			<view class="cate-content" @click.stop.prevent="stopPrevent" @touchmove.stop.prevent="stopPrevent">
				<scroll-view scroll-y class="cate-list">
					<!-- 	<view>
						<view class="cate-item b-b two"></view>
						<view 
							v-for="tItem in item.child" :key="tItem.id" 
							class="cate-item b-b" 
							:class="{active: tItem.id==cateId}"
							@click="changeCate(tItem)">
							{{tItem.name}}
						</view>
					</view> -->
					<view class="service-item">
						<view class="service-head">服务折扣</view>
						<view class="service-text">
							<view class="service-option">包邮</view>
							<view class="service-option">货到付款</view>
							<view class="service-option">仅看有货</view>
							<view class="service-option">包邮</view>
							<view class="service-option">包邮</view>
							<view class="service-option">包邮</view>
						</view>
					</view>

					<view class="Price-item">
						<view class="Price-head">价格区间</view>
						<view class="Price-text">
							<view class="Price-interval">
								<input class="uni-input" type="number" placeholder="最低价" />
								<input class="uni-input" type="number" placeholder="最高价" />
							</view>
							<!-- <view class="">包邮</view> -->
						</view>
					</view>

					<view class="service-item">
						<view class="service-head">品牌</view>
						<view class="service-text">
							<view class="service-option">包邮</view>
							<view class="service-option">货到付款</view>
							<view class="service-option">仅看有货</view>
							<view class="service-option">包邮</view>
							<view class="service-option">包邮</view>
							<view class="service-option">包邮</view>
						</view>
					</view>

					<view class="service-item">
						<view class="service-head">分类</view>
						<view class="service-text">
							<view class="service-option">奢侈品</view>
							<view class="service-option">更多分类...</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>

	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import wlpListGood from '@/components/wlp-list-good/wlp-list-good.vue';
	export default {
		components: {
			uniLoadMore,
			wlpListGood
		},
		data() {
			return {
				Hidden: false, //控制商品列表显示一行一个还是两
				cateMaskState: 0, //分类面板展开状态
				headerPosition: "fixed",
				headerTop: "0px",
				loadingType: 'more', //加载更多状态
				filterIndex: 0,
				cateId: 0, //已选三级分类id
				priceOrder: 0, //1 价格从低到高 2价格从高到低
				cateList: [],
				goodsList: []
			};
		},

		onLoad(options) {
			// #ifdef H5
			this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight + 'px';
			// #endif
			this.cateId = options.tid;
			this.loadCateList(options.fid, options.sid);
			this.loadData();
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新
		onPullDownRefresh() {
			this.loadData('refresh');
		},
		//加载更多
		onReachBottom() {
			this.loadData();
		},
		methods: {

			// 切换一行一个还是两个
			onNavigationBarButtonTap(e) {
	
				// #ifdef APP-PLUS  
				const currentWebview = this.$mp.page.$getAppWebview();
				console.log(currentWebview)
				// var currentWebview = page.createMapContext(); //页面栈最顶层就是当前webview  
				// #endif

				console.log(e)
				let index = e.index
				if (index == 0) {
					this.Hidden = !this.Hidden
				}
				if (e.text == '\ue744') {
					// currentWebview.setTitleNViewButtonStyle(1, {
					// 	text:"\ue60d"
					// });
				} else {
					console.log(2)
				}
			},
			//加载分类
			async loadCateList(fid, sid) {
				let list = await this.$api.json('cateList');
				let cateList = list.filter(item => item.pid == fid);

				cateList.forEach(item => {
					let tempList = list.filter(val => val.pid == item.id);
					item.child = tempList;
				})
				this.cateList = cateList;
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
			//显示分类面板
			toggleCateMask(type) {
				let timer = type === 'show' ? 10 : 300;
				let state = type === 'show' ? 1 : 0;
				this.cateMaskState = 2;
				setTimeout(() => {
					this.cateMaskState = state;
				}, timer)
			},
			//分类点击
			changeCate(item) {
				this.cateId = item.id;
				this.toggleCateMask();
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			//详情
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
				})
			},
			stopPrevent() {}
		},
	}
</script>

<style lang="scss">
	page,
	.content {
		background: $page-color-base;
	}

	.content {
		padding-top: 96upx;
	}

	.navbar {
		margin-top: 44px;
		position: fixed;
		left: 0;
		top: var(--window-top);
		display: flex;
		width: 100%;
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

	// 分类修改
	.Price-item {
		.Price-head {
			margin: 40rpx;
			font-size: 26upx;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}

		.Price-text {

			.Price-interval {
				justify-content: space-around;
				display: flex;

				.uni-input {
					width: 250upx;
					height: 60upx;
					background: rgba(248, 248, 248, 1);
					border-radius: 29upx;
					text-align: center;
					font-size: 20upx;
					font-family: PingFang SC;
					font-weight: 500;
					color: rgba(229, 229, 229, 1);

				}

			}
		}
	}

	.service-item {
		.service-head {
			margin: 40rpx;
			font-size: 26upx;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
		}

		.service-text {
			display: flex;
			flex-wrap: wrap;

			.service-option {
				width: 170upx;
				height: 60upx;
				background: rgba(243, 243, 243, 1);
				border-radius: 30upx;
				margin: 20upx;
				line-height: 60upx;
				text-align: center;
				font-size: 22upx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}


	}

	/* 分类 */
	.cate-mask {
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		z-index: 999;
		transition: .3s;

		.cate-content {
			width: 630upx;
			height: 100%;
			background: #fff;
			float: right;
			transform: translateX(100%);
			transition: .3s;
		}

		&.none {
			display: none;
		}

		&.show {
			background: rgba(0, 0, 0, .4);

			.cate-content {
				transform: translateX(0);
			}
		}
	}

	.cate-list {
		display: flex;
		flex-direction: column;
		height: 100%;

		.cate-item {
			display: flex;
			align-items: center;
			height: 90upx;
			padding-left: 30upx;
			font-size: 28upx;
			color: #555;
			position: relative;
		}

		.two {
			height: 64upx;
			color: #303133;
			font-size: 30upx;
			background: #f8f8f8;
		}

		.active {
			color: $base-color;
		}
	}
</style>

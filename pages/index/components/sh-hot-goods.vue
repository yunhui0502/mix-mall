<template>
	<!-- 为你推荐 -->
	<view class="f-header-tj">
		<!-- 上面盒子 -->
		<view class="hot-floor">
			<!-- 左 -->
			<view @click="onSelectedMore" class="left-box">
				<!-- 文字部分 -->
				<view style="margin-bottom: 10rpx;" class="tit-box">
					<text class="tit">{{ slots.activityName }}</text>
					<text style="color:#DE4186;" class="tit2"><text class="tit3">{{ slots.The }}点场</text>{{ slots.startTimes }}</text>
				</view>
				<!-- 商品部分 -->
				<view class="p10 gradient">
					<view v-for="(item, index) in productSecKillData" :key="index" class="floor-list">
						<image class="v-img" :src="item.imageUrl"></image>
						<text class="v-text">{{ item.priceArea / 100 }}</text>
						<text style="color:#888;text-decoration:line-through;">{{item.linePrice / 100}}</text>
					</view>
				</view>
			</view>
			<!-- 右 -->
			<view @click="onSelectedgroup" class="right-box">
				<!-- 文字部分 -->
				<view class="tit-box">
					<text class="tit">团购活动</text>
					<text style="text-align: center;" class="tit2 gradient-textFind">限时团购活动</text>
				</view>
				<!-- 内容图片 -->
				<view class="p10">
					<view v-for="(item, index) in productGroups"  v-if="index < 2" :key="index" class="floor-list">
						<image class="right-img" :src="item.imageUrl"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 下面盒子 -->
		<view class="hot-floor">
			<!-- 左 -->
			<view class="right-box2">
				<view class="right-new">
					<view @click="onClickRanking">
						<text class="tit">{{ choiceness1.activityName }}</text>
						<view style="color:#FF8E56;" class="right-text">{{choiceness1.activityDesc}}</view>
						<view class="gradient-textDaily">
							<image class="right-img" :src="choiceness1.imageUrl"></image>
						</view>
					</view>

					<view @click="onClickRanking">
						<text class="tit">{{ choiceness2.activityName }}</text>
						<view class="right-text">{{ choiceness2.activityDesc }}</view>
						<view class="gradient-textRanking">
							<image class="right-img" :src="choiceness2.imageUrl"></image>
						</view>
					</view>
				</view>
			</view>
			<!-- 右 -->
			<view @click="onClickRanking" v-for="(item, i) in choicenesslist" class="left-box2" :key="i">
				<!-- 文字部分 -->
				<view class="tit-box">
					<text class="tit">{{ item.activityName }}</text>
					<text style="text-align: center;" class="tit2 gradient-textSpecial">品质好货</text>
				</view>
				<view style="color:#3ECDC5;" class="right-text">{{item.activityDesc}}</view>
				<!-- 内容图片 -->
				<view class="p10">
					<view class="floor-list">
						<image class="right-img" :src="item.imageUrl"></image>
					</view>
					<view class="floor-list">
						<image class="right-img" :src="item.imageUrl"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import requestUtils from "@/services/request-utils.js";
	import productApi from "@/services/hf-product.js";
	// import shoproGoodsCard from "@/components/shopro-goods-card/shopro-goods-card.vue";
	export default {
		name: 'shHotGoods',
		components: {
			// shoproGoodsCard
		},
		data() {
			return {
				getCategoryList: "",
				leftMenus: "", //一级分类
				// -------精选-----------
				choiceness1: "",
				choiceness2: "",
				choicenesslist: [],
				// ------------------
				productGroups: [], // 团购
				// ____秒杀______
				productSecKillData: "",
				slots: "",
				// _____________
				listParams: {},
				goodsList: []
			};
		},
		props: {
			detail: {
				type: Object,
				default: null
			}
		},
		created() {
			this.getProductSeckill();
			this.getProductGroup();
			this.getTopRanking();
		},
		computed: {},
		methods: {
			getProductSeckill() {
				let selectedTime = new Date();
				productApi.getProductSeckill({
						// eslint-disable-next-line no-undef
						currentTime: selectedTime
					},
					res => {
						let productSecKillData = res.data.data;
						productSecKillData[0].The = productSecKillData[0].endTimes.substring(0, 2);
						console.log("秒杀", productSecKillData);
						requestUtils.setImageUrls(productSecKillData[0].productList);

						this.productSecKillData = productSecKillData[0].productList;
						this.slots = productSecKillData[0];
					}
				);
			},

			getProductGroup() {
				productApi.getProductGroup((res) => {
					let productGroups = [];
					console.log(res.data.data)
					for (let i = 0; i < res.data.data.length; i++) {
						// console.log(res.data.data[i].productList)
						let productList = res.data.data[i].productList
						for (let j = 0; j < productList.length; j++) {
							productGroups.push(productList[j])
						}
					}
					console.log('团购', productGroups)
					requestUtils.setImageUrls(productGroups);

					this.productGroups = productGroups;

				});
			},
			getTopRanking() {
				// 精选
				productApi.getTopRanking((res) => {
					let rankings = res.data.data;
					requestUtils.setImageUrls(rankings);
					var choicenesslist = []
					rankings.map((item, index) => {
						console.log('item', item)
						if (index == 0) {
							this.choiceness1 = item;
						} else if (index == 1) {
							this.choiceness2 = item;
						} else {
							choicenesslist.push(item)
							this.choicenesslist = choicenesslist;
						}

					});
					console.log('choiceness1', this.choiceness1);
					console.log('choiceness2', this.choiceness2);
					console.log('choicenesslist', this.choicenesslist);
				});
			}
		}
	};
</script>

<style lang="scss">
	.left-box {
		flex: 1;
	}

	.tit {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: rgba(21, 21, 21, 1);
		/* margin-right: 20rpx; */
	}

	.p10 {
		display: flex;
		padding: 10rpx;
	}

	.tit2 {
		width: 172rpx;
		height: 36rpx;
		/* border:1rpx solid rgba(247,68,68,1); */
		border-radius: 18rpx;

		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		display: inline-block;
	}

	.tit3 {
		text-align: center;
		width: 78rpx;
		display: inline-block;
		font-size: 20rpx;
		background: rgba(247, 68, 68, 1);
		border-radius: 18rpx;
		margin-right: 6rpx;
		color: rgba(255, 255, 255, 1);
	}

	.menu-category-box {
		/* width: 710rpx; */
		height: 290rpx;
		margin-top: 76rpx;
	}

	.menu-swiper-item {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.v-img {
		width: 104rpx;
		height: 106rpx;
		margin: 0 auto;
	}

	/* 右 */
	.right-box {
		flex: 1;
		padding-left: 20rpx;
		/* background-color: antiquewhite; */
	}

	.floor-list {
		display: flex;
		flex-direction: column;
		text-align: center;
		font-size: 24rpx;
	}

	.right-text {
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: rgba(51, 204, 255, 1);
	}

	.right-img {
		width: 144rpx;
		height: 148rpx;
		padding: 4rpx;
	}

	.left-box2 {
		flex: 1;
		padding-left: 8rpx;
	}

	left-box2:after {
		content: "";
		flex: auto;
	}

	/* 排行榜 */
	.right-new {
		display: flex;
	}

	.gradient {
		background: linear-gradient(rgb(250, 250, 250), rgb(253, 222, 228));
		border-radius: 10px;
	}

	.f-header-tj {
		/* height: 100rpx; */
		background-color: #ffffff;
		margin: 0 auto;
		margin: 20rpx;
		padding: 10rpx;

		.hot-floor {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 30rpx;

			.left-box {
				flex: 1;
			}

			.tit-box {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.right-box {
			flex: 1;
			padding-left: 20rpx;
			/* background-color: antiquewhite; */
		}

		.gradient-textFind {
			background: linear-gradient(to right,
				rgba(252, 76, 121, 1),
				rgba(253, 152, 158, 1));
			border-radius: 10px;
		}

		/* 发现好货 */
		.gradient-textSpecial {
			background: linear-gradient(90deg,
				rgba(67, 201, 197, 1),
				rgba(142, 237, 202, 1));
			border-radius: 10px;
		}

		/* 每日 */
		.gradient-textDaily {
			background: linear-gradient(179deg,
				rgba(255, 255, 255, 1),
				rgba(253, 229, 214, 1));
			border-radius: 10px;
			padding: 10rpx;
		}

		/* 排行榜 */
		.gradient-textRanking {
			background: linear-gradient(179deg,
				rgba(255, 255, 255, 1),
				rgba(226, 212, 255, 1));
			border-radius: 10px;
			padding: 12rpx;
			margin-left: 8rpx;
		}

		.gradient-img {
			background: linear-gradient(179deg,
				rgba(255, 255, 255, 1),
				rgba(226, 212, 255, 1));
			border-radius: 10px;
			padding: 10rpx;
			margin: 4rpx;
		}
	}
</style>

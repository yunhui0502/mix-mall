<template>

	<view class="container">

		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in imgageUrls" :key="index">
					<view class="image-wrapper">
						<image :src="item" class="loaded" mode="aspectFit"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="introduce-section">
			<view class="price-box">
				<text class="price-tip">¥</text>
				<text class="price">{{numFilter(goods.priceArea/100)}}</text>
				<text class="m-price">¥{{numFilter(linePrice/100)}}</text>
				<!-- <text class="coupon-tip">7折</text> -->

				<view class="price-image-box">
					<view style="display:flex;flex-direction:column;width: 96rpx;">
						<image src="../../static/etails-icon/jiangjiatixing.png" class="price-image" />
						<text>降价通知</text>
					</view>
					<view style="display:flex;flex-direction:column;width: 96rpx;">
						<image src="../../static/etails-icon/guanzhu.png" class="price-image" />
						<text>12.5万</text>
					</view>
				</view>

			</view>
			<text class="title">{{goods.productDesc}}</text>
			<view class="bot-row">
				<text>销量: 108</text>
				<text>库存: 4690</text>
				<text>浏览量: 768</text>
			</view>
		</view>

		<!--  分享 -->
		<view class="share-section" @click="share">
			<view class="share-icon">
				<text class="yticon icon-xingxing"></text>
				返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<text class="yticon icon-you"></text>
			</view>

		</view>

		<view class="c-list">
			<view class="c-row b-b" @click="toggleSpec">
				<text class="tit">已选</text>
				<view class="con">
					<text class="selected-text">
						{{specSelected.hfNames}}
					</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>
			<view class="c-row b-b">
				<text class="tit">配送至</text>
				<text class="con t-r red">天津市西青区华苑产业园区迎水道148号</text>
				<text class="yticon icon-you"></text>
			</view>
			<!-- 		<view class="c-row b-b">
				<text class="tit">促销活动</text>
				<view class="con-list">
					<text>新人首单送20元无门槛代金券</text>
					<text>订单满50减10</text>
					<text>订单满100减30</text>
					<text>单笔购买满两件免邮费</text>
				</view>
			</view> -->
			<!-- <view class="c-row b-b">
				
			</view> -->
			<view class="assured">
				<view class="site-refund">
					<view class="refund-flex">
						<image src="../../static/etails-icon/fangxingou.png" class="refund-image" />
						<view class="refund-box">
							<text class="refund-text">闪电退款</text>
							<view class="refund-d"></view>
							<text class="refund-text">极速审核</text>
							<view class="refund-d"></view>
							<text class="refund-text">7天价保</text>
						</view>
					</view>
					<!-- image src="../../images/tabs/diandian.png" class="selected-images" /> -->
				</view>
				<view class="site-safeguard">
					<image src="../../static/etails-icon/duihao.png" class="safeguard-image" />
					<text class="safeguard-text">店铺发货&售后</text>
					<image src="../../static/etails-icon/duihao.png" class="safeguard-image" />
					<text class="safeguard-text">7天无理由退货</text>
					<image src="../../static/etails-icon/duihao.png" class="safeguard-image" />
					<text class="safeguard-text">货到付款</text>
				</view>

			</view>
		</view>

		<!-- 评价 -->
		<view class="eva-section">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>(86)</text>
				<text class="tip">好评率 100%</text>
				<text class="yticon icon-you"></text>
			</view>
			<view class="eva-box">
				<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="right">
					<text class="name">Leo yo</text>
					<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot">
						<text class="attr">购买类型：XL 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 店铺 -->
		<view class="Shops-box">
			<!-- 店铺头-->
			<view class="Shops-head">
				<image class="Shops-image" src="https://img13.360buyimg.com/deepvisual/s300x150_jfs/t1/117180/31/13569/15666/5f210f67E14a5a60c/61289a9f6bb988e5.png!cc_300x150.webp" />
				<view class="Shops-text">
					<text class="Shops-textHead">万宝龙自营专区
						<image class="Shops-ziying" src="../../static/etails-icon/ziying.png" /></text>
					<text class="Shops-concern">158.65万人关注</text>
				</view>
			</view>
			<!-- 店铺列表 -->
			<view class="Shops-list">
				<view class="Shops-item" v-for="(item,index) in 4" :key="index">
					<image class="Shops-image" src="https://img11.360buyimg.com/img/s100x100_jfs/t1/5064/31/3461/142209/5b997c0eE8b26d23e/8788a4743af36f36.jpg!cc_100x100.webp" />
					<text>限量款</text>
				</view>
			</view>
			<!-- 按钮 -->
			<view class="Shops-butt">
				<button class="Shops-btn" type="default">精选商品</button>
				<button @click="clickShops" class="Shops-btn" type="default">进店逛逛</button>
			</view>
		</view>

		<view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<!-- <rich-text :nodes="desc"></rich-text> -->
			<view class="description-contents">
				<view style="height: 800rpx;" v-for="item in introduceimgurl">
					<image class="imageUrl" :src="item.imageUrl"></image>
				</view>
			</view>
		</view>

		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>首页</text>
			</navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-gouwuche"></text>
				<text>购物车</text>
			</navigator>
			<view class="p-b-btn" :class="{active: favorite}" @click="toFavorite">
				<text class="yticon icon-shoucang"></text>
				<text>收藏</text>
			</view>

			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border add-cart-btn">加入购物车</button>
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="buy">立即购买</button>
			</view>
		</view>

		<!-- 服务弹窗 -->

		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="stopPrevent" @click="toggleSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<image src="https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg"></image>
					<view class="right">
						<text class="price">¥328.00</text>
						<text class="stock">库存：188件</text>
						<view class="selected">
							已选：
							<text class="selected-text">
								{{specSelected.hfNames}}
							</text>
						</view>
					</view>
				</view>
				<!-- <view v-for="(item,index) in specList" :key="index" class="attr-list"> -->
				<!-- <text>{{item.name}}</text> -->
				<view class="item-list">
					<text v-for="(childItem, childIndex) in goodsList" :key="childIndex" class="tit" :class="{selected: childItem.selected}"
					 @click="selectSpec(childIndex, childItem.id)">
						{{childItem.hfNames}}
					</text>
				</view>
				       <!-- 分割线 -->
				    <view class="divLine"></view>
					
				    <view class="guigebox-num">
				      <view style="font-size:18px;line-height:62rpx;">数量</view>
				      <view class="stepper">
				        <!-- 减号 -->
				        <text  bind:tap="onBindMinus">-</text>
				        <!-- 数值 -->
				        <input type="number" bind:change="onBindManual" :value="quantity" />
				        <!-- 加号 -->
				        <text class="normal" bind:tap="onBindPlus">+</text>
				      </view>
				    </view>
				<!-- </view> -->
				<button class="btn" @click="toggleSpec">完成</button>
			</view>
		</view>
		<!-- 分享 -->
		<share ref="share" :contentHeight="580" :shareList="shareList"></share>
	</view>
</template>

<script>
	import share from '@/components/share';
	import shHotGoods from "./components/sh-service.vue";

	import productApi from "@/services/hf-product.js";
	import goodsApi from "@/services/hf-goods.js";
	import requestUtils from "@/services/request-utils.js";
	export default {
		components: {
			share,
			shHotGoods
		},
		data() {
			return {
				quantity:1,
				imgageUrls: [],
				amount: '', //图片总数
				linePrice: '', // 下线价格
				goods: '',
				goodsList: '',
				introduceimgurl: [], //介绍图
				instanceId:'', //实体ID

				showModal: 'none',
				specClass: 'none',
				specSelected: [],

				favorite: true,
				shareList: [],
				imgList: [{
						src: 'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd3.alicdn.com/imgextra/i3/TB1RPFPPFXXXXcNXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg'
					},
					{
						src: 'https://gd2.alicdn.com/imgextra/i2/38832490/O1CN01IYq7gu1UGShvbEFnd_!!38832490.jpg_400x400.jpg'
					}
				],
				desc: `
					<div style="width:100%">
						<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i4/479184430/O1CN01nCpuLc1iaz4bcSN17_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd2.alicdn.com/imgextra/i2/479184430/O1CN01gwbN931iaz4TzqzmG_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd3.alicdn.com/imgextra/i3/479184430/O1CN018wVjQh1iaz4aupv1A_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd4.alicdn.com/imgextra/i4/479184430/O1CN01tWg4Us1iaz4auqelt_!!479184430.jpg_400x400.jpg" />
						<img style="width:100%;display:block;" src="https://gd1.alicdn.com/imgextra/i1/479184430/O1CN01Tnm1rU1iaz4aVKcwP_!!479184430.jpg_400x400.jpg" />
					</div>
				`,
				specList: [{
						id: 1,
						name: '尺寸',
					},
					{
						id: 2,
						name: '颜色',
					},
				],
				specChildList: [{
						id: 1,
						pid: 1,
						name: 'XS',
					},
					{
						id: 2,
						pid: 1,
						name: 'S',
					},
					{
						id: 3,
						pid: 1,
						name: 'M',
					},
					{
						id: 4,
						pid: 1,
						name: 'L',
					},
					{
						id: 5,
						pid: 1,
						name: 'XL',
					},
					{
						id: 6,
						pid: 1,
						name: 'XXL',
					},
					{
						id: 7,
						pid: 2,
						name: '白色',
					},
					{
						id: 8,
						pid: 2,
						name: '珊瑚粉',
					},
					{
						id: 9,
						pid: 2,
						name: '草木绿',
					},
				]
			};
		},
		async onLoad(options) {

			//接收传值,id里面放的是标题，因为测试数据并没写id 
			let id = options.id;
			let stoneId = options.stoneId;
			this.instanceId = options.instanceId;
			console.log(options)
			// if (id) {
			// 	this.$api.msg(`点击了${id}`);
			// }
			if (id == 'undefined') {
				this.$api.msg(`商品ID不存在`);
			} else {
				//       productApi.getProductDetail(id, stoneId, (res) => {
				//         console.log(res)
				//         let goods = res.data.data;
				//         console.log('商品图', goods);

				//         let imgageUrls = [];

				//         for (let fileId of goods.fileIds) {
				//           imgageUrls.push('https://www.tjsichuang.cn:1443/api/product/goods/getFile?fileId=' + fileId);
				//         }
				//         let product = res.data.data;
				//         console.log(product);
				//         this.updateSelectedGoods(product.defaultGoodsId, product);
				//           this.imgageUrls = imgageUrls;
				//       })

			}
			let params = {
				userId: uni.getStorageSync('data').userId,
				productId: id,
				stoneId: stoneId
			}
			productApi.getProductDetail(params, (res) => {
					let goods = res.data.data;
					// let imgageUrls = res.data.data;
					// requestUtils.setImageUrls(goods.fileIds);
					console.log('商品图', goods);

					let imgageUrls = [];
					for (let fileId of goods.fileIds) {
						imgageUrls.push('https://www.tjsichuang.cn:1443/api/product/goods/getFile?fileId=' + fileId);
					}
					console.log(goods)
					console.log('商品图imgageUrls', imgageUrls)
					let product = res.data.data;
					// this.updateSelectedGoods(product.defaultGoodsId, product);
					this.amount = goods.fileIds.length,
						this.imgageUrls = imgageUrls,
						this.linePrice = goods.linePrice,
						this.goods = goods
				}),
				// 获取规格
				goodsApi.getGoodDetailByProductId({
					productId: id,
					quantity: '1',
					stoneId: stoneId,
				}, (res) => {
					let goodsList = res.data.data;
					console.log(res.data.data)
					for (let goods of goodsList) {
						for (let index in goods.fileIds) {
							console.log(index)
							goods.fileIds[index] = 'https://www.tjsichuang.cn:1443/api/product/goods/getFile?fileId=' + goods.fileIds[index]
						}
						goods.hfNames = []
						for (let index in goods.hfGoodsSpecs) {
							console.log(index)
							goods.hfNames.push(goods.hfGoodsSpecs[index].hfValue + ':' + goods.hfGoodsSpecs[index].hfName)
						}
						goods.hfNames = goods.hfNames.join(" | ")
					}

					this.$set(goodsList[0], 'selected', true);
					this.goodsList = goodsList,
						//规格 默认选中第一条
						this.specSelected = goodsList[0]
					console.log('规格', this.goodsList)
					console.log('规格', this.specSelected)
				});

			productApi.selectProductIntroducePictrue({
				productId: id
			}, (res) => {
				let evaluation = res.data.data;
				requestUtils.setImageUrls(evaluation);
				console.log('商品介绍', evaluation);
				this.introduceimgurl = evaluation
			})

			this.shareList = await this.$api.json('shareList');
		},

		methods: {

			numFilter(value) {
				// 截取当前数据到小数点后两位
				let realVal = parseFloat(value).toFixed(2)
				return realVal
			},
			clickShops() {
				uni.navigateTo({
					url: `/pages/shops/shops`
				})
			},
			// 服务弹窗开关
			hideModal() {
				this.showModal = 'none';
			},
			onServe() {
				this.showModal = 'show';
			},
			//规格弹窗开关
			toggleSpec() {
				if (this.specClass === 'show') {
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				} else if (this.specClass === 'none') {
					this.specClass = 'show';
				}
			},
			//选择规格
			selectSpec(index, id) {
				let list = this.goodsList;
				list.forEach(item => {
					if (item.id === id) {
						this.$set(item, 'selected', true);
					} else {
						this.$set(item, 'selected', false);
					}
				})


				//存储已选择
				this.specSelected = [];
				list.forEach(item => {
					if (item.selected === true) {
						this.specSelected = item;
					}
				})

			},
			//分享
			share() {
				this.$refs.share.toggleMask();
			},
			//收藏
			toFavorite() {
				this.favorite = !this.favorite;
			},
			buy() {
				console.log(this.goods)
				console.log(this.instanceId)
				let goods = this.goods
				goods.hfNames=specSelected.hfNames
				 let goodsList = []
				    let obj = {
				      goodsId: this.specSelected.id,//选中的商品ID
				      hfDesc: this.instanceId,
				      quantity: 1,
				      stoneId: this.goods.stoneId,
					  goods: this.goods
				    }
				    goodsList.push(obj)
					 encodeURIComponent(JSON.stringify(goodsList))
				uni.navigateTo({
					url: `/pages/order/createOrder?goodsList=` + encodeURIComponent(JSON.stringify(goodsList))
				})
			},
			stopPrevent() {}
		},

	}
</script>

<style lang='scss'>
	/* 分割线 */
	.divLine{
	 background: #E0E3DA;
	 width: 100%;
	 height: 1rpx;
	 margin: 40rpx 0;
	}
	
	.guigebox-num {
	  width: 100%;
	  height: 62rpx;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  .stepper {
		display: flex;
	    width: 80px;
	      height: 26px;
	    /*给主容器设一个边框*/
	    border: 1px solid #ccc;
	    border-radius: 3px;
	    /* margin: 0 auto; */
	  }
	  .stepper .normal {
	    color: black;
	  }
	}
	
	/* 服务弹窗样式 */
	.description-contents {
		width: 701rpx;
		margin: 0 auto;
		margin-top: 23rpx;
		font-size: 24rpx;
		font-family: 'PingFang SC';
		font-weight: 400;
		color: rgba(102, 102, 102, 1);

		.imageUrl {
			width: 100%;
			height: 800rpx;
			display: inline-block;
			overflow: hidden;
		}
	}

	.server-modal-box {
		width: 750rpx;
		height: 100%;
		border-radius: 30rpx 30rpx 0 0;
		background: #fff;
		padding: 30rpx;

		.serve-btn {
			width: 690rpx;
			height: 80rpx;
			background: linear-gradient(90deg, rgba(240, 199, 133, 1), rgba(246, 214, 157, 1));
			border-radius: 40rpx;
			color: rgba(#fff, 0.9);
			margin-top: 40rpx;
		}

		.modal-head {
			margin-bottom: 30rpx;
			position: relative;

			.head-title {
				font-size: 32rpx;
				font-weight: bold;
			}

			.cuIcon-roundclosefill {
				position: absolute;
				font-size: 34rpx;
				color: #e0e0e0;
				top: 10rpx;
				right: 10rpx;
			}
		}

		.modal-content {
			overflow-y: auto;

			.serve-list {
				padding-bottom: 40rpx;

				.title-tag {
					width: 38rpx;
					height: 38rpx;
					margin-right: 20rpx;
				}

				.serve-title {
					font-size: 28rpx;
					font-weight: bold;
				}

				.serve-detail {
					text-align: left;
					font-size: 26rpx;
					color: #999;
					line-height: 42rpx;
					padding-left: 58rpx;
					margin-top: 20rpx;
				}
			}
		}
	}

	/* 店铺 */
	.Shops-box {
		margin: 20rpx 0rpx;
		background: rgba(255, 255, 255, 1);

		/* 店铺头部样式 */
		.Shops-head {
			padding: 26rpx;
			display: flex;

			.Shops-image {
				width: 108upx;
				height: 108upx;
			}

			.Shops-text {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.Shops-ziying {
					width: 40upx;
					height: 28upx;
					margin-left: 10rpx;
				}

				.Shops-textHead {
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(0, 0, 0, 1);
				}

				.Shops-concern {
					font-size: 18rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(153, 153, 153, 1)
				}
			}
		}

		/* 店铺列表样式 */
		.Shops-list {
			display: flex;
			justify-content: space-between;
			margin: 32rpx;

			.Shops-item {
				text-align: center;
				display: flex;
				flex-direction: column;
				font-size: 20rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);

				.Shops-image {
					padding: 14rpx;
					height: 134rpx;
					width: 134rpx;
				}
			}
		}

		/* 按钮 */
		.Shops-butt {
			display: flex;
			/* height: 60upx; */
			padding: 36rpx 0;

			.Shops-btn {
				height: 30px;
				line-height: 30px;
				width: 200rpx;
				border: 1rpx solid rgba(51, 51, 51, 1);
				border-radius: 100rpx;
				font-size: 22rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
	}

	/* 放心购 */
	.assured {
		padding: 20rpx 0;
	}

	.site-refund {
		height: 36rpx;
		margin-left: 23rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.refund-image {
			width: 106rpx;
			height: 36rpx;
		}

		.refund-flex {
			display: flex;
			align-items: center;

			.refund-box {
				display: flex;
				align-items: center;
				margin-left: 25rpx;

				.refund-text {
					line-height: 36rpx;
					font-size: 24rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: rgba(255, 8, 8, 1);
				}

				.refund-d {
					width: 7rpx;
					height: 7rpx;
					background: rgba(255, 8, 8, 1);
					border-radius: 50%;
					margin: 0 9rpx;
				}
			}
		}
	}

	.site-safeguard {
		height: 25rpx;
		margin-left: 21rpx;
		margin-top: 30rpx;
		display: flex;
		align-items: center;

		.safeguard-image {
			width: 25rpx;
			height: 25rpx;
			margin-right: 7rpx;
		}

		.safeguard-text {
			margin-right: 19rpx;
			font-size: 22rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
		}
	}

	/* ---------------------------------- */
	page {
		background: $page-color-base;
		padding-bottom: 160upx;
	}

	.icon-you {
		font-size: $font-base + 2upx;
		color: #888;
	}

	.carousel {
		height: 722upx;
		position: relative;

		swiper {
			height: 100%;
		}

		.image-wrapper {
			width: 100%;
			height: 100%;
		}

		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

	}

	/* 标题简介 */
	.introduce-section {
		background: #fff;
		padding: 20upx 30upx;

		.title {
			font-size: 32upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}

		.price-box {
			display: flex;
			align-items: baseline;
			/* height: 64upx; */
			padding: 10upx 0;
			font-size: 36upx;
			color: $uni-color-primary;

			.price-image-box {
				font-size: 12rpx;
				color: rgba(51, 51, 51, 1);
				text-align: center;
				margin-left: 210rpx;
				display: flex;

				.price-image {
					margin: 0 auto;
					margin-bottom: 8rpx;
					width: 40rpx;
					height: 40rpx;
				}
			}

		}

		.price {
			font-size: $font-lg + 20upx;
		}

		.m-price {
			margin: 0 12upx;
			color: $font-color-light;
			text-decoration: line-through;
		}

		.coupon-tip {
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx);
		}

		.bot-row {
			display: flex;
			align-items: center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;

			text {
				flex: 1;
			}
		}
	}

	/* 分享 */
	.share-section {
		display: flex;
		align-items: center;
		color: $font-color-base;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;

		.share-icon {
			display: flex;
			align-items: center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4upx;
			position: relative;
			overflow: hidden;
			font-size: 22upx;
			color: $uni-color-primary;

			&:after {
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position: absolute;
				background: $uni-color-primary;
			}
		}

		.icon-xingxing {
			position: relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}

		.tit {
			font-size: $font-base;
			margin-left: 10upx;
		}

		.icon-bangzhu1 {
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}

		.share-btn {
			flex: 1;
			text-align: right;
			font-size: $font-sm;
			color: $uni-color-primary;
		}

		.icon-you {
			font-size: $font-sm;
			margin-left: 4upx;
			color: $uni-color-primary;
		}
	}

	.c-list {
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;

		.c-row {
			display: flex;
			align-items: center;
			padding: 20upx 30upx;
			position: relative;
		}

		.tit {
			width: 140upx;
		}

		.con {
			flex: 1;
			color: $font-color-dark;

			.selected-text {
				margin-right: 10upx;
			}
		}

		.bz-list {
			height: 40upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;

			text {
				display: inline-block;
				margin-right: 30upx;
			}
		}

		.con-list {
			flex: 1;
			display: flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}

		.red {
			color: $uni-color-primary;
		}
	}

	/* 评价 */
	.eva-section {
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;

		.e-header {
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;

			.tit {
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}

			.tip {
				flex: 1;
				text-align: right;
			}

			.icon-you {
				margin-left: 10upx;
			}
		}
	}

	.eva-box {
		display: flex;
		padding: 20upx 0;

		.portrait {
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}

		.right {
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;

			.con {
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}

			.bot {
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color: $font-color-light;
			}
		}
	}

	/*  详情 */
	.detail-desc {
		background: #fff;
		margin-top: 16upx;

		.d-header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;

			text {
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}

			&:after {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc;
			}
		}
	}

	/* 规格选择弹窗 */
	.attr-content {
		padding: 10upx 30upx;

		.a-t {
			display: flex;

			image {
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;
				;
			}

			.right {
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;

				.price {
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}

				.selected-text {
					margin-right: 10upx;
				}
			}
		}

		.attr-list {
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}

		.item-list {
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;

			text {
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}

			.selected {
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
	}

	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}

		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;

			.btn {
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx auto 20upx;
			}
		}

		@keyframes showPopup {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		@keyframes hidePopup {
			0% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}

		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}

			100% {
				transform: translateY(0%);
			}
		}

		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}

			100% {
				transform: translateY(120%);
			}
		}
	}

	/* 底部操作菜单 */
	.page-bottom {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100upx;
		background: rgba(255, 255, 255, .9);
		/* box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5); */
		/* border-radius: 16upx; */

		.p-b-btn {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;

			.yticon {
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}

			&.active,
			&.active .yticon {
				color: $uni-color-primary;
			}

			.icon-fenxiang2 {
				font-size: 42upx;
				transform: translateY(-2upx);
			}

			.icon-shoucang {
				font-size: 46upx;
			}
		}

		.action-btn-group {
			display: flex;
			height: 76upx;
			/* border-radius: 100px; */
			overflow: hidden;
			/* box-shadow: 0 20upx 40upx -16upx #fa436a; */
			/* box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4); */
			/* background: linear-gradient(to right, #ffac30, #fa436a, #F56C6C); */
			margin-left: 20upx;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				/* border-right: 1px solid rgba(255, 255, 255, .5); */
			}

			.action-btn {
				margin: 0 16rpx;
				width: 180upx;
				height: 100%;
				font-size: $font-base;
				padding: 0;
				border-radius: 100px;
				background: transparent;
			}

			.buy-now-btn {
				background: linear-gradient(90deg, rgba(255, 204, 0, 1), rgba(253, 223, 117, 1));
			}

			.add-cart-btn {
				background: linear-gradient(90deg, rgba(232, 0, 0, 1), rgba(253, 223, 117, 1));
			}

		}
	}
</style>

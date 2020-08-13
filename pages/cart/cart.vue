<template>
	<view class="container">
		<!-- 空白页 -->
		<view v-if="!hasLogin || empty===true" class="empty">
			<image src="/static/emptyCart.jpg" mode="aspectFit"></image>
			<view v-if="hasLogin" class="empty-tips">
				空空如也
				<navigator class="navigator" v-if="hasLogin" url="../index/index" open-type="switchTab">随便逛逛></navigator>
			</view>
			<view v-else class="empty-tips">
				空空如也
				<view class="navigator" @click="navToLogin">去登陆></view>
			</view>
		</view>
		<view v-else>
			<view class="commodity-banner">
				<view class="table" @click="checkcar" data-index="1">
					<text class="">全部(0)</text>
					<view :class="bannertoggle==1?'colors':'sum-color'"></view>
				</view>
				<view class="table" @click="toggle" data-index="2">
					<view class="color:#999999;">降价(0)</view>
					<view :class="bannertoggle==2?'colors':'sum-color'"></view>
				</view>
				<view class="table" @click="toggle" data-index="3">
					<text class="">常买(0)</text>
					<view :class="bannertoggle==3?'colors':'sum-color'"></view>
				</view>
				<view class="table ">
					<view class="table-sum">
						<text class="" @click="edit" style="font-weight:bold;">{{editshow==true?'编辑':'完成'}}</text>
						<!-- <image src="../../images/cart/xiala1.png" class="sai-image" /> -->
					</view>
				</view>
			</view>
			<!-- 列表 -->
			<view class="content">
				<checkbox-group bindchange="checkboxChange">
					<block v-for="(item1, index) in 1">
						<view style="background:#fff;margin-bottom:30rpx;padding:30rpx 0;">
							<view style="margin-left:80rpx;margin-bottom:30rpx;color: #333;font-size: 28rpx;">
								店铺名称
							</view>
							<scroll-view scroll-x direction="horizonta" style="margin-top:30rpx" v-for="(item, index) in cartList" :key="item.id">
								<view class="content-card">
									<!-- <checkbox value="0" checked="{{item.check==1}}" bindtap="check" data-index='{{index}}'></checkbox> -->
									<view style="margin-right:10rpx;">
										<!-- 选中按钮 -->
										<view class="yticon icon-xuanzhong2 checkbox" :class="{checked: item.checked}" @click="check('item', index)"></view>
									</view>
									<view class="content-item">
										<!-- <image mode="aspectFit" src="{{img}}/goods/getFile?fileId={{item.productIcon}}" style="width:230rpx;height:100%"></image> -->
										<image mode="aspectFit" :src="item.image" style="width:230rpx;height:100%"></image>
										<view class="contentitem-right">
											<text class="item-name">{{item.title}}</text>
											<view class="Specification">
												0.29kg，选服务
											</view>
											<view class="card-money">
												<view class="discounts-money">
													<text class="money-title">¥</text>
													<text class="money-number">{{item.price}}</text>
												</view>
												<view class="subadd">
													<!-- 数量 -->
													<uni-number-box class="step" :min="1" :max="item.stock" :value="item.number>item.stock?item.stock:item.number"
													 :isMax="item.number>=item.stock?true:false" :isMin="item.number===1" :index="index" @eventChange="numberChange"></uni-number-box>
												</view>
											</view>
										</view>
									</view>
									<view class="hid-item">
										<view style="width:50rpx;" v-if="isOftenBuy==true" @click="oftenbuy" >设为常买</view>
										<view style="width:50rpx;" v-if="isOftenBuy==false" @click="delOftenBuy">取消常买</view>
									</view>
									<view class="hid-item" style="background:rgba(255,204,0,1);" bindtap="concern">
										<view style="width:50rpx;color:white">移入关注</view>
									</view>
									<view class="hid-item" style="background:rgba(255,0,0,1);" @click="deleteCartItem(index)">
										<view style="width:50rpx;color:white;margin-top:15rpx">删除</view>
									</view>
								</view>
							</scroll-view>
						</view>
					</block>
				</checkbox-group>
			</view>
			<!--  原有列表 -->
<!-- 		<view class="cart-list">
				<block v-for="(item, index) in cartList" :key="item.id">
					<view class="cart-item" :class="{'b-b': index!==cartList.length-1}">
						<view class="image-wrapper">
							<image :src="item.image" :class="[item.loaded]" mode="aspectFill" lazy-load @load="onImageLoad('cartList', index)"
							 @error="onImageError('cartList', index)"></image>
							<view class="yticon icon-xuanzhong2 checkbox" :class="{checked: item.checked}" @click="check('item', index)"></view>
						</view>
						<view class="item-right">
							<text class="clamp title">{{item.title}}</text>
							<text class="attr">{{item.attr_val}}</text>
							<text class="price">¥{{item.title}}</text>
							<uni-number-box class="step" :min="1" :max="item.stock" :value="item.number>item.stock?item.stock:item.number"
							 :isMax="item.number>=item.stock?true:false" :isMin="item.number===1" :index="index" @eventChange="numberChange"></uni-number-box>
						</view>
						<text class="del-btn yticon icon-fork" @click="deleteCartItem(index)"></text>
					</view>
				</block>
			</view> -->
			<!-- 底部菜单栏 -->
			<view class="action-section">
				<view class="checkbox">
					<image :src="allChecked?'/static/selected.png':'/static/select.png'" mode="aspectFit" @click="check('all')"></image>
					 <text class="checkbox-text">全选</text>
					<!-- <view class="clear-btn" :class="{show: allChecked}" @click="clearCart">
						清空
					</view> -->
				</view>
				<view class="total-box">
					<text class="price"><text class="price-text">合计:</text>¥{{total}}</text>
					<text class="coupon">
						已优惠:
						<text>74.35</text>
						元
					</text>
				</view>
				<button type="primary" class="no-border confirm-btn" @click="createOrder">去结算</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import uniNumberBox from '@/components/uni-number-box.vue'
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				isOftenBuy: true,
				editshow: true,
				bannertoggle: 1,
				total: 0, //总价格
				allChecked: false, //全选状态  true|false
				empty: false, //空白页现实  true|false
				cartList: [],
			};
		},
		onLoad() {
			this.loadData();
		},
		watch: {
			//显示空白页
			cartList(e) {
				let empty = e.length === 0 ? true : false;
				if (this.empty !== empty) {
					this.empty = empty;
				}
			}
		},
		computed: {
			...mapState(['hasLogin'])
		},
		methods: {
			  edit: function() {
			    var that = this;
			      that.editshow=!that.editshow
			  },
			  toggle:function(e){
			    console.log(e.currentTarget.dataset.index)

			      this.bannertoggle = e.currentTarget.dataset.index;
			    
			   //  let obj={
			   //    type:1,
			   //    userId: wx.getStorageSync('userId'),
			   //  }
			   //  var that=this;
			   // car.checkcar(obj, (res) => {
			   //    console.log(res);
			   //    // that.setData({
			   //    //   shangjiagoods:res.data.data
			   //    // })
			   //  let arr=res.data.data;
			   //  for(var i=0;i<arr.length;i++){
			   //    for(var j=0;j<arr[i].goodList.length;j++){
			   //      arr[i].goodList[j].check=0;
			   //      arr[i].goodList[j].productPrice=(arr[i].goodList[j].productPrice/100).toFixed(2)
			   //    }
			   //  }
			   //  that.setData({
			   //    shangjiagoods:arr
			   //  })
			   //    console.log(that.data.shangjiagoods);
			   //  })   
			  },
			  oftenbuy:function(e){
			    let obj={
			      num:1,
			      type:1,
			      goodsId:e.currentTarget.dataset.goodsid,
			      stoneId:e.currentTarget.dataset.stontid,
			      userId : wx.getStorageSync('userId'),
			    }
			    console.log(obj)
			    // car.buy(obj, (res) => {
			    //   console.log(res)
			    //   if(res.data.status==200){
			    //     wx.showToast({
			    //       title: '设置成功',
			    //     })
			        
			    //   }else{
			    //     wx.showToast({
			    //       title: '设置失败',
			    //       icon:'none'
			    //     })
			    //   }
			    //   this.getCartListInfo();
			    // });
			  },
			checkcar: function() {
				// let obj={
				//   type:0,
				//   userId: wx.getStorageSync('userId'),
				// }
				var that = this;
				that.bannertoggle = 1;
				// car.checkcar(obj, (res) => {
				//    console.log(res);
				//    // that.setData({
				//    //   shangjiagoods:res.data.data
				//    // })
				//  let arr=res.data.data;
				//  for(var i=0;i<arr.length;i++){
				//    for(var j=0;j<arr[i].goodList.length;j++){
				//      arr[i].goodList[j].check=0;
				//      arr[i].goodList[j].productPrice=(arr[i].goodList[j].productPrice/100).toFixed(2)
				//    }
				//  }
				//  that.setData({
				//    shangjiagoods:arr
				//  })
				//    console.log(that.data.shangjiagoods);
				//  })   
			},
			// --------------------------------------------------------------
			//请求数据
			async loadData() {
				let list = await this.$api.json('cartList');
				let cartList = list.map(item => {
					item.checked = true;
					return item;
				});
				this.cartList = cartList;
				console.log('this.cartList',this.cartList)
				this.calcTotal(); //计算总价
			},
			//监听image加载完成
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			//监听image加载失败
			onImageError(key, index) {
				this[key][index].image = '/static/errorImage.jpg';
			},
			navToLogin() {
				uni.navigateTo({
					url: '/pages/public/login'
				})
			},
			//选中状态处理
			check(type, index) {
				if (type === 'item') {
					this.cartList[index].checked = !this.cartList[index].checked;
				} else {
					const checked = !this.allChecked
					const list = this.cartList;
					list.forEach(item => {
						item.checked = checked;
					})
					this.allChecked = checked;
				}
				this.calcTotal(type);
			},
			//数量
			numberChange(data) {
				this.cartList[data.index].number = data.number;
				this.calcTotal();
			},
			//删除
			deleteCartItem(index) {
				let list = this.cartList;
				let row = list[index];
				let id = row.id;

				this.cartList.splice(index, 1);
				this.calcTotal();
				uni.hideLoading();
			},
			//清空
			clearCart() {
				uni.showModal({
					content: '清空购物车？',
					success: (e) => {
						if (e.confirm) {
							this.cartList = [];
						}
					}
				})
			},
			//计算总价
			calcTotal() {
				let list = this.cartList;
				if (list.length === 0) {
					this.empty = true;
					return;
				}
				let total = 0;
				let checked = true;
				list.forEach(item => {
					if (item.checked === true) {
						total += item.price * item.number;
					} else if (checked === true) {
						checked = false;
					}
				})
				this.allChecked = checked;
				this.total = Number(total.toFixed(2));
			},
			//创建订单
			createOrder() {
				let list = this.cartList;
				let goodsData = [];
				list.forEach(item => {
					if (item.checked) {
						goodsData.push({
							attr_val: item.attr_val,
							number: item.number
						})
					}
				})

				uni.navigateTo({
					url: `/pages/order/createOrder?data=${JSON.stringify({
						goodsData: goodsData
					})}`
				})
				this.$api.msg('跳转下一页 sendData');
			}
		}
	}
</script>

<style lang='scss'>
	page {
		background-color: #F6F6F6;
	}
	/* 复选框未选中样式 */
	.checkbox {
		z-index: 8;
		font-size: 44upx;
		line-height: 1;
		padding: 4upx;
		color: $font-color-disabled;
		background: #fff;
		border-radius: 50px;
	}

	.content{	
	  width:100%;
	  height: 100%;
	  margin-top:32rpx;

	  /* 复选框选中状态 */
      .checked {
	  	color: #F6230A;
	  }
	  .content-card{
	    width:100%;
	    height: 230rpx;
	    display: flex;
	    justify-content: flex-start;
	    align-items: center;
	    padding: 0 34rpx;
	    box-sizing:border-box;
		.content-item{
		  width: 615rpx;
		  height: 100%;
		  display: flex;
		  justify-content: flex-start;
		  margin-right:68rpx;
		  .contentitem-right{
		    width:364rpx;
		    height: 100%;
		    display: flex;
		    flex-direction: column;
		    justify-content: space-around;
		    margin-left:30rpx;
			.item-name {
				font-size:22upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(51,51,51,1);
	
			}
			.Specification {
				margin-top: 10rpx;
				width:288upx;
				height:48upx;
				background:rgba(248,248,248,1);
				border-radius:24upx;
				text-align: center;
				font-size:20upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(0,0,0,1);
			}
			.card-money {
			  width:100%;
			  display: flex;
			  justify-content: space-between;
			  align-items: center;
			  /* 内容部分 */
			  .discounts-money {
				  font-size:28upx;
				  font-family:Gilroy;
				  font-weight:500;
				  color:rgba(0,0,0,1);
				  line-height:30px;
			      margin-top: 22rpx;
			      line-height: 26rpx;
			      display: flex;
			      align-items: center;
				  
				  .money-title {
				      font-size: 28rpx;
				      font-weight: bold;
				      font-family: 'PingFang-SC-Bold';
				  }
				  .money-number {
				      font-family: 'PingFang-SC-Medium';
				      font-size: 28rpx;
				      font-weight: 500;
				      margin-left: 3rpx;
				  }
			  }
			  .subadd{
			    display: flex;
			    justify-content: space-between;
			    align-items: center;
			    /* width: 128rpx; */
			    margin-top:22rpx;
			  }
			}
			
		  }
		}
		.hid-item{
		  height:100%;
		background:rgba(240,240,240,1);
		padding: 88rpx 30rpx;
		box-sizing: border-box;
		font-size:24rpx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(21,21,21,1);
		}
	  }
	}
	/* ---------------------------------------------------------------------------------------------- */

	/* ---------------------------------------------------------------------------------------------- */

	.commodity-banner {
		z-index: 100;
		width: 100%;
		/* 		position: fixed;
		top: 0; */
		height: 88rpx;
		background: #fff;
		display: flex;
		justify-content: space-around;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(21, 21, 21, 1);
		line-height: 88rpx;
		text-align: center;
		background: #fff;

		.table {
			width: 25%;
			height: 100%;
			text-align: center;
			color: #131418;
		}

		.sum-color {
			width: 47rpx;
			height: 5rpx;
			margin: 0 auto;
			margin-top: -14rpx;
			border-radius: 2rpx;
		}

		.colors {
			background: rgba(255, 51, 51, 1);
			width: 47rpx;
			height: 5rpx;
			margin: 0 auto;
			margin-top: -14rpx;
			border-radius: 2rpx;
		}

		.table-sum {
			display: flex;
			width: 100%;
			height: 100%;
			justify-content: space-around;
			align-items: center;
			padding: 0 45rpx;
			box-sizing: border-box;
		}
	}

	/* ------------------------------------------------------------------------------ */
	.container {
		padding-bottom: 134upx;

		/* 空白页 */
		.empty {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100vh;
			padding-bottom: 100upx;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			background: #fff;

			image {
				width: 240upx;
				height: 160upx;
				margin-bottom: 30upx;
			}

			.empty-tips {
				display: flex;
				font-size: $font-sm+2upx;
				color: $font-color-disabled;

				.navigator {
					color: $uni-color-primary;
					margin-left: 16upx;
				}
			}
		}
	}

	/* 购物车列表项 */
	.cart-item {
		display: flex;
		position: relative;
		padding: 30upx 40upx;

		.image-wrapper {
			width: 230upx;
			height: 230upx;
			flex-shrink: 0;
			position: relative;

			image {
				border-radius: 8upx;
			}
		}

		.checkbox {
			position: absolute;
			left: -16upx;
			top: -16upx;
			z-index: 8;
			font-size: 44upx;
			line-height: 1;
			padding: 4upx;
			color: $font-color-disabled;
			background: #fff;
			border-radius: 50px;
		}

		.item-right {
			display: flex;
			flex-direction: column;
			flex: 1;
			overflow: hidden;
			position: relative;
			padding-left: 30upx;

			.title,
			.price {
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				height: 40upx;
				line-height: 40upx;
			}

			.attr {
				font-size: $font-sm + 2upx;
				color: $font-color-light;
				height: 50upx;
				line-height: 50upx;
			}

			.price {
				height: 50upx;
				line-height: 50upx;
			}
		}

		.del-btn {
			padding: 4upx 10upx;
			font-size: 34upx;
			height: 50upx;
			color: $font-color-light;
		}
	}

	/* 底部栏 */
	.action-section {
		/* #ifdef H5 */
		margin-bottom: 60upx;
		/* #endif */
		position: fixed;
		left: 0upx;
		bottom: 30upx;
		z-index: 95;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100upx;
		padding: 0 30upx;
		background: #FFFFFF;
/* 		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);
		border-radius: 16upx; */

		.checkbox {
			height: 52upx;
			position: relative;
            .checkbox-text {
				margin-left: 10upx;
				font-size:28upx;
				font-family:PingFang SC;
				font-weight:bold;
				color:rgba(51,51,51,1);
			}
			image {
				vertical-align:middle;
				width: 52upx;
				height: 100%;
				position: relative;
				z-index: 5;
			}
		}

		.clear-btn {
			position: absolute;
			left: 26upx;
			top: 0;
			z-index: 4;
			width: 0;
			height: 52upx;
			line-height: 52upx;
			padding-left: 38upx;
			font-size: $font-base;
			color: #fff;
			background: $font-color-disabled;
			border-radius: 0 50px 50px 0;
			opacity: 0;
			transition: .2s;

			&.show {
				opacity: 1;
				width: 120upx;
			}
		}

		.total-box {
			flex: 1;
			display: flex;
			flex-direction: column;
			/* text-align: right; */
			padding-left: 20upx;

			.price {
				font-size: 24upx;
				color: #FE0101;
				.price-text {
					font-family:PingFang SC;
					font-weight:bold;
					color:rgba(0,0,0,1);
				}
			}

			.coupon {
				font-size:20upx;
				font-family:PingFang SC;
				font-weight:500;
				color:rgba(0,0,0,1);
				text {
					color: $font-color-dark;
				}
			}
		}

		.confirm-btn {
			padding: 0 38upx;
			margin: 0;
			border-radius: 100px;
			height: 76upx;
			line-height: 76upx;
			font-size: $font-base + 2upx;
			background: $uni-color-primary;
			box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72)
		}
	}

	/* 复选框选中状态 */
	.action-section .checkbox.checked,
	.cart-item .checkbox.checked {
		color: $uni-color-primary;
	}
</style>

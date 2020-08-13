<template>
	<view style="color: #F6F6F6;">
		<!-- 一行2 -->
		<view v-if="!Hidden" class="goods-list">
			<view v-for="(item, index) in goodsList" :key="index" class="goods-item" @click="navToDetailPage(item)">
				<view class="image-wrapper">
					<image :src="item.image" mode="scaleToFill"></image>
				</view>
				<view class="goods-title">
					<text class="title clamp">{{item.title}}</text>
					<view class="price-box">
						<text class="price">{{item.price}}</text>
					</view>
					<text class="marlboro">万宝龙官方旗舰店   
					<text class="baguette">进店  <text class="yticon icon-you"></text></text></text>
				</view>
			</view>
		</view>
		<!-- 一行一个的 -->
		<view v-if="Hidden" class="goods-two-list">
			 <view v-for="(item1, index) in goodsList" :key="index" class="goods-two-item">
				 <view class="image-two-wrapper">
				 	<image :src="item1.image" mode="scaleToFill"></image>
				 </view>
				 <view class="goods-title f40">
				 	<text class="title clamp">{{item1.title}}</text>
				 	<view class="price-box">
				 		<text class="price">{{item1.price}}</text>
				 	</view>
				 	<text class="marlboro">万宝龙官方旗舰店   
				 	<text class="baguette">进店  <text class="yticon icon-you"></text></text></text>
				 </view>
		     </view>
		</view>
		
	</view>

</template>

<script>
	export default {
		props: ["goodsList","Hidden"],
		data() {
			return {
              // Hidden:false
			};
		},
		computed: {

		},

		methods: {}
	};
</script>

<style lang="scss">
	.goods-two-list {
	
	}
	.goods-two-item {
		display:flex;
	}
	.f40 {
		width: 60%;
		border-bottom: 1px solid #E5E5E5;
		display:flex;
		flex-direction:column;
		justify-content : space-around;
	}
	.image-two-wrapper {
	  width: 260upx;
	  height: 260upx;
	  margin: 20upx 0;
	  image {
		  width: 100%;
		  height: 100%;
	  }
	}
	/* 商品列表 */
	.goods-title {
		padding: 0 10rpx;
	}
	.icon-you {
		font-size: 22upx;
		color: $font-color-light;
		margin-left: 6upx;
	}
	.marlboro {
		font-size:20upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(138,138,138,1);
		.baguette {
			font-size:20upx;
			font-family:PingFang SC;
			font-weight:bold;
			color:rgba(51,51,51,1);
			margin-left: 30upx;
			
		}
	}
	.title{
		font-size: $font-lg;
		color: $font-color-dark;
		line-height: 80upx;
	}
	.price-box{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-right: 10upx;
		font-size: 24upx;
		color: $font-color-light;
	}
	.price{
		font-size: $font-lg;
		line-height: 1;
		font-family:Gilroy;
		font-weight:500;
		color:rgba(254,0,0,1);
		&:before{
			content: '￥';
			font-size: 26upx;
		}
	}
	.goods-list{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		// background: #fff;
		.goods-item{
			// width:337px;
			display:flex;
			flex-direction: column;
			background:rgba(255,255,255,1);
			border-radius:20upx 25upx 25upx 25upx;
			width: 48%;
			padding-bottom: 16upx;
			margin-bottom: 26upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}

		.image-wrapper{
			// width: 89%;
			// width: 260upx;
			height: 260upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}

	}
</style>

<template>
	<view class="tabBar">
		<view
		 v-for="(item,index) in tabBar" 
		 :key="item.url" 
		 class="tabbar_item" 
		 :class="{'active':item.url == currentPage}"
		 @click="navTo(item)"
		 >
			<image v-if="item.url == currentPage" :src="item.imgClick" mode=""></image>
			<image v-else :src="item.imgNormal" mode=""></image>
			<view class="text">{{item.text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			currentPage:{
				type:String,
				default:'index'
			}
		},
		data() {
			return {
				tabBar:[{
						url:'/pages/shops/shops',
						text:'首页',
						imgNormal:'/static/imgs/shops-dianpu1.png',
						imgClick:'/static/imgs/shops-dianpu.png'
					},
					{
						url:'/pages/shops/classify/classify',
						text:'分类',
						imgNormal:'/static/imgs/shops-feilen1.png',
						imgClick:'/static/imgs/shops-feilen.png'
					},
					{
						url:'/pages/shops/goods-list/goods',
						text:'商品',
						imgNormal:'/static/imgs/shops-shangpin1.png',
						imgClick:'/static/imgs/shops-shangpin.png'
					},{
						url:'tabBar4',
						text:'联系客服',
						imgNormal:'/static/imgs/shops-message.png',
						imgClick:'/static/imgs/shops-message.png'
					}]
			};
		},
		created() {
			uni.hideTabBar({})
		},
		computed:{
			
		},
		methods:{
			navTo(item){
				console.log(item.url)
				console.log(this.currentPage)
				// if(item.url !== this.currentPage){
				// 	var isUrl = `/pages/${item.url}/${item.url}`
				// 	const that = this
				// 	uni.switchTab({
				// 		url: isUrl
				// 	})
				// } else{
					uni.navigateTo({
						url: item.url
					})
				// }
			}
		}
	}
</script>

<style lang="scss" scoped>
	//导航栏设置
		$isRadius:20upx; //左上右上圆角
		$isWidth:85vw; //导航栏宽度
		$isBorder:3px solid white; //边框 不需要则设为0px
		$isBg:#FFFF; //背景
	
	// 选中设置
		$chooseTextColor:#50B7EA; //选中时字体颜色
		$chooseBgColor:white; //选中时背景颜色 transparent为透明
	
	//未选中设置
		$normalTextColor:#999; //未选中颜色
	.tabBar{
		height: 100upx;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 998;
		background-color: $isBg;
		color: $normalTextColor;
		border-left: $isBorder;
		border-top: $isBorder;
		border-right: $isBorder;
		display: flex;
		justify-content: space-around;
		border-top-right-radius: $isRadius;
		border-top-left-radius: $isRadius;
		box-sizing: border-box;
		overflow: hidden;
		.tabbar_item{
			width: 25%;
			font-size: 12px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			&.active{
				border-left: $isBorder;
				border-top: $isBorder;
				background: #FFFF;
				color: $chooseTextColor;
			}
		}
		image{
			width: 48upx;
			height:48upx;
			margin-left: 5upx;
		}
	}
</style>

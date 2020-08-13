<template>
	<view class="search x-c" style="background: red">
		<view class="search-box x-c shopro-selector-rect" @tap="">
			<text class="cuIcon-search"></text>
			<text class="search-val">输入关键字搜索</text>
		</view>
	</view>
</template>
<script>
export default {
	components: {},
	data() {
		return {};
	},
	props: {},
	computed: {},
	methods: {
	
	}
};
</script>

<style lang="scss">
.active {
	transition: all linear 0.3s;
}
.search {
	height: 100rpx;
	width: 750rpx;
	background: #fff;
	transition: all linear 0.3s;
	padding: 0 20rpx;
}

.search-box {
	height: 64rpx;
	width: 710rpx;
	background: #f5f5f5;
	border-radius: 32rpx;

	.cuIcon-search {
		font-size: 36rpx;
		// margin-right: 20rpx;
	}

	.search-val {
		font-size: 30rpx;
		margin: 30rpx;
	}
}
</style>

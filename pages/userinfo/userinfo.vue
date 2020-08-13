<template>
	<view>
		<view class="user-section">
			<view class="user-item">
				<text>头像</text>
				<view>
					<image src="/static/imgs/slices/yonghu.png" mode=""></image>
					<text class="yticon icon-you"></text>
				</view>
			</view>

			<view class="user-item">
				<text>名字</text>
				<text>阿里巴巴</text>
			</view>

			<view class="user-item">
				<text>手机号码</text>
				<text>请填写</text>
			</view>

			<view class="user-item">
				<text>性别</text>
				<view>
					<text>男</text>
					<text class="yticon icon-you"></text>
				</view>
			</view>

			<view class="user-item">
				<text>出生日期</text>
				<view>
					<text>请选择</text>
					<text class="yticon icon-you"></text>
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {

			};
		},
		computed: {
			...mapState(['userInfo']),
		}
	}
</script>

<style lang="scss">
	page {
		background: #F6F6F6;
	}

	image {
		width: 90upx;
		height: 90upx;
		vertical-align:middle;
	}

	.icon-you {
		margin-left: 10px;
		font-size: $font-lg;
		color: $font-color-light;
		flex: 1;
		text-align: right;
	}

	.user-section {
		padding: 0upx 30upx;
		height: 436upx;
		background: rgba(255, 255, 255, 1);
       .user-item {
		   height: 90upx;
		   line-height: 90upx;
		   display:flex;
		   justify-content : space-between;
		   font-size:26upx;
		   font-family:PingFang SC;
		   font-weight:500;
		   color:rgba(51,51,51,1);
		   text:nth-child(2) {
			   font-size:24upx;
			   font-family:PingFang SC;
			   font-weight:500;
			   color:rgba(153,153,153,1);
		   }
	   }
	}
</style>

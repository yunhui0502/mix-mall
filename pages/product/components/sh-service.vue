<template>
	<view class="shopro-selector-rect">
		<view class="cu-modal bottom-modal" style="z-index: 999;"  @tap="hideModal" catchtouchmove="true">
			<view class="cu-dialog server-modal" @tap.stop style="background: none;">
				<view class="server-modal-box page_box">
					<view class="modal-head x-c">
						<text class="head-title">服务保障</text>
						<text class="cuIcon-roundclosefill" @tap="hideModal"></text>
					</view>
					<view class="modal-content content_box">
						<view class="serve-list" v-for="serve in 6" :key="serve.title">
							<view class="title-box x-f">
								<image class="title-tag" :src="serve.image" mode=""></image>
								<text class="serve-title">ww</text>
							</view>
							<view class="serve-detail">ssss</view>
						</view>
					</view>
					<view class="modal-foot x-c"><button class="cu-btn serve-btn" @tap="hideModal">确定</button></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	props: {
		
	},
	computed: {
	
	},
	methods: {
		hideModal() {
			this.showModal = false;
		},
		onServe() {
			this.showModal = true;
		}
	}
};
</script>

<style lang="scss">

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
</style>

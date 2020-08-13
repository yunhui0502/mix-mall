<template>
	<view class="">
		<view class="estimate-goods">
			<view class="goods-top">
				<view class="top-head">
					<view class="head">
						<image class="image" src="/static/imgs/slices/guanzhuwomen.png" mode=""></image>
						<view class="head-name">
							<text>C.VO MI</text>
							<view class="bisect">
								<image src="/static/rate/star.png" mode=""></image>
								<image src="/static/rate/star.png" mode=""></image>
								<image src="/static/rate/star.png" mode=""></image>
								<image src="/static/rate/star_empty.png" mode=""></image>
								<image src="/static/rate/star_empty.png" mode=""></image>
							</view>
						</view>
					</view>
					<text>2020-5-15</text>
				</view>
				<text>手感很好,非常不错,这次是第二次购买了,送男朋友的,他很喜欢</text>
				<view class="top-img">
					<image v-for="(item,i) in 9" src="https://img13.360buyimg.com/jdcms/s150x150_jfs/t1/125706/21/8993/158442/5f2d1ff6E45b9a747/66080feeac1180c9.jpg.webp"
					 mode=""></image>
				</view>
			</view>
			<view class="goods-bottom">
				<image src="https://img13.360buyimg.com/jdcms/s150x150_jfs/t1/125706/21/8993/158442/5f2d1ff6E45b9a747/66080feeac1180c9.jpg.webp"
				 mode=""></image>
				<view class="bottom-price">
					<text>MONTBLANC 万宝龙 大班系列签字笔163/11 2678 </text>
					<text>¥ 3580.00</text>
				</view>
			</view>
		</view>
		<!-- <rate @change="onChange"></rate> -->
		<view class="commentl-box">
			<view class="commentl-head">
				<image src="/static/message.png" mode=""></image>
				<text>全部评论</text>
			</view>
			<view class="commentl-body">

				<view class="top-head">
					<view class="head">
						<image class="image" src="/static/imgs/slices/guanzhuwomen.png" mode=""></image>
						<view class="head-name">
							<view class="name">
								<text>欢乐斗地主</text>
								<text class="butt">买主</text>
							</view>
							<text>2020-5-15</text>
						</view>
					</view>
					<view class="Reply">
						<text>sdasdasd asdasdasd</text>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 60px;">
			
		</view>
<!-- 底部 -->
		<view class="bottom-hurdle">
			<view class="hurdle">
				<image src="/static/imgs/pinglun3.png" mode=""></image>
				<input v-model="changeValue" placeholder="" />
			</view>
			<view class="icon-box">
				<text>156</text>
				<view>
					<image src="/static/imgs/message.png" mode=""></image>
				</view>
				
				<text>156</text>
				<view>
						<image src="/static/imgs/dianzan-copy.png" mode=""></image>
				</view>
			
			</view>
		</view>

	</view>
</template>

<script>
	import rate from '../../components/rate.vue'
	export default {
		name: 'evaluate',
		components: {
			rate
		},
		data() {
			return {
				changeValue: ''
			}
		},
		methods: {
			onChange(d) {
				console.log(d)
			}
		},
	}
</script>

<style lang='scss'>
	page {
		background-color: #F6F6F6;
	}

	.bottom-hurdle {
		 position:fixed;
		    /* top:30px; */
		    bottom:0px;
		display: flex;
		background-color: #FFFF;
		padding: 20upx;

		.icon-box {
			height: 60upx;
			line-height: 60upx;
			display: flex;
            text-align:center;

			image {
				/* margin-top: 10upx; */
				vertical-align:middle;
				width: 34upx;
				height: 34upx;
			}

			text {
				margin: 0 20upx;
				font-size: 20upx;
				font-family: Gilroy;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}

		.hurdle {

			display: flex;
			width: 480upx;
			height: 60upx;
			background: rgba(249, 249, 249, 1);
			border-radius: 30px 30px 30px 30px;

			image {
				margin: 14upx;
				width: 26upx;
				height: 25upx;
			}
		}
	}

	.commentl-box {

		.commentl-head {
			margin-top: 20upx;
			padding: 0 30upx;
			border-bottom: 1px solid #C0C4CC;
			background-color: #FFFF;
			display: flex;
			height: 60upx;
			line-height: 60upx;
			font-size: 22upx;
			font-family: PingFang SC;
			font-weight: bold;
			color: rgba(51, 51, 51, 1);
			diaplay: inline-block;

			image {
				margin-top: 10upx;
				margin-right: 10upx;
				width: 34upx;
				height: 34upx;
			}
		}

		.commentl-body {
			background-color: #FFFF;
			padding: 30upx 40upx;

			.top-head {
				font-size: 18upx;
				font-family: Gilroy;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);

				.Reply {
					margin-left: 40rpx;
					margin-top: 10upx;
				}

				.head {
					display: flex;

					image {
						width: 56upx;
						height: 56upx;
					}

					.head-name {
						font-size: 20upx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #999999;

						margin-left: 10upx;

						.name {
							font-size: 20upx;
							font-family: PingFang SC;
							font-weight: bold;
							color: rgba(51, 51, 51, 1);

							.butt {
								padding: 4upx 10upx;
								color: #FFFF;
								margin: 0 20upx;
								background-color: #3097F7;
								border-radius: 20upx;
							}
						}
					}
				}


			}
		}
	}

	.estimate-goods {
		padding: 0 20upx;
		/* width:750px; */
		/* height:1110upx; */
		background: rgba(255, 255, 255, 1);
		border-radius: 0px 0px 10upx 10upx;

		.goods-top {
			padding: 20upx 10upx;
			border-bottom: 1px solid #C0C4CC;

			.top-head {
				display: flex;
				justify-content: space-between;
				font-size: 18upx;
				font-family: Gilroy;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);

				.head {
					display: flex;

					image {
						width: 56upx;
						height: 56upx;
					}

					.head-name {
						font-size: 20upx;
						font-family: PingFang SC;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);

						margin-left: 10upx;

						.bisect {
							image {
								width: 24upx;
								height: 24upx;
							}
						}
					}
				}

			}

			text {
				font-size: 22upx;
				font-family: PingFang SC;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}

			.top-img {
				margin: 20upx 0;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				image {
					width: 208upx;
					height: 208upx;
					margin-bottom: 22upx;
				}
			}
		}

		.goods-bottom {
			padding: 30upx 0;
			display: flex;

			image {
				width: 160upx;
				height: 160upx;
			}

			.bottom-price {
				margin-left: 20upx;
				display: flex;
				justify-content: space-between;
				flex-direction: column;

				text:nth-child(1) {
					font-size: 22upx;
					font-family: PingFang SC;
					font-weight: bold;
					color: rgba(51, 51, 51, 1)
				}

				text:nth-child(2) {
					font-size: 24upx;
					font-family: Gilroy;
					font-weight: 500;
					color: rgba(254, 0, 0, 1);
				}
			}
		}
	}
</style>

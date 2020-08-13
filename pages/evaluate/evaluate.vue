<template>
	<view class="gods-box">
		<view class="goods-head">
			<image src="https://img10.360buyimg.com/jdcms/s150x150_jfs/t1/111582/4/13302/952367/5f1fc8eaEb5f10c60/af31250581141270.png.webp"
			 mode=""></image>
			<view class="goods-body">
				<text>MONTBLANC 万宝龙 大班系列签字笔 163/112 678</text>
                <rate @change="onChange"></rate>
			</view>
		</view>

       <textarea  @blur="blur" :value="infoReceive.textareaValue" :placeholder="textareaPlaceholder"/>

		<view class="add-img">
			<image src="/static/imgs/img.png" mode=""></image>
              <view>
              	 
				 <text>在这里可以添加合规的图片/视频</text>
              </view>
		</view>
	</view>
</template>

<script>
	import rate from '../../components/rate.vue'
	// import myIssue from '../../components/myIssue.vue'
	export default {
		name: 'evaluate',
		components: {
			rate
		},
		props:{
			textareaShow:{ // 多行文本显示
				type:[String,Boolean],
				default:true,
			},
			textareaPlaceholder:{
				type:[String],
				default:"宝贝满足你的期待吗？说说你的使用心得，分享给想买的他们吧"
			},
			infoReceive:{ // 获取值
				type:Object,
				default:function(){
					return {
						score:0,
						textareaValue:""
					}
				}
			}
		},
		data() {
			return {
				changeValue: ''
			}
		},
		methods: {
			onChange(d) {
				console.log(d)
			},
			blur(e){
				this.infoReceive.textareaValue=e.detail.value
			},
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}
	.add-img {
		margin: 20upx 0;
		font-size:20upx;
		font-family:PingFang SC;
		font-weight:500;
		color:rgba(153,153,153,1);
		text-align: center;
		
		// width:750upx;
		height:270upx;
		// line-height: 135upx;		
		background:rgba(255,255,255,1);
		// border-radius:6px;
		image {
			margin-top: 80upx;
			width: 98upx;
			height: 76upx;
		}
		view {
			// display:flex;
			// flex-direction:column;
			// justify-content : center;
		}
		
	}
	textarea{
		width: 100%;
		height: 420upx;
		background-color: #FFFF;
		// font-size: $fontSize;
		color: #898989;
		padding: 24upx;
		box-sizing: border-box;
		line-height: 40upx;
	}
	.gods-box {
		

		.goods-head {
			display:flex;
			padding: 30upx;
			background-color: #FFFF;
			margin: 20upx 0;
			image {
				width: 200upx;
				height: 200upx;
			}

			.goods-body {
				margin-left: 20upx;
				font-size: 22upx;
				font-family: PingFang SC;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
			}
		}
	}
</style>

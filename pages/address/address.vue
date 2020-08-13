<template>
	<view class="content b-t">
		<view class="list b-b" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
			<view class="wrapper">
				<view class="u-box">
					<text class="name">{{item.name}}</text>
					<text class="mobile">{{item.mobile}}</text>
					<text v-if="item.default" class="tag">默认</text>
				</view>
				<view class="address-box">
					<text class="address">{{item.addressName}} {{item.area}}</text>
				</view>
			</view>
			<!-- <text class="yticon icon-bianji" @click.stop="addAddress('edit', item)"></text> -->
			<image src="/static/imgs/pinglun3.png" class="icon-pinglun" @click.stop="addAddress('edit', item)" mode=""></image>
		</view>
		
		<button class="add-btn" @click="addAddress('add')">新增地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				source: 0,
				addressList: [
					{
						name: '刘晓晓',
						mobile: '18666666666',
						addressName: '贵族皇仕牛排(东城店)',
						address: '北京市东城区',
						area: 'B区',
						default: true
					},{
						name: '刘大大',
						mobile: '18667766666',
						addressName: '龙回1区12号楼',
						address: '山东省济南市历城区',
						area: '西单元302',
						default: false,
					}
				]
			}
		},
		onLoad(option){
			console.log(option.source);
			this.source = option.source;
		},
		methods: {
			//选择地址
			checkAddress(item){
				if(this.source == 1){
					//this.$api.prePage()获取上一页实例，在App.vue定义
					this.$api.prePage().addressData = item;
					uni.navigateBack()
				}
			},
			addAddress(type, item){
				uni.navigateTo({
					url: `/pages/address/addressManage?type=${type}&data=${JSON.stringify(item)}`
				})
			},
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);
				
				console.log(data, type);
			}
		}
	}
</script>

<style lang='scss'>
	page{
		padding-bottom: 120upx;
	}
	.content{
		position: relative;
	}
	.list{
		display: flex;
		align-items: center;
		padding: 20upx 30upx;;
		background: #fff;
		position: relative;
	}
	.wrapper{
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.address-box{
		margin-top: 16upx;

		.address{
			font-size:22upx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(51,51,51,1);
		}
	}
	.u-box{
	    display: flex;
		align-items: center;
		font-size:28upx;
		font-family:Gilroy;
		font-weight:bold;
		color:rgba(51,51,51,1);
		.name{
			margin-right: 30upx;
		}
		.tag{
			margin-left: 20upx;
			font-size: 20upx;
			color: #FFFF;
			margin-right: 10upx;
			background: #E80000;
			border: 1px solid #E80000;
			padding: 4upx 10upx;
			line-height: 1;
		}
	}
	.icon-bianji{
		display: flex;
		align-items: center;
		height: 80upx;
		font-size: 40upx;
		color: $font-color-light;
		padding-left: 30upx;
	}
	.icon-pinglun {
		width: 26upx;
		height: 26upx;
	}
	
	.add-btn{
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
	    background:linear-gradient(90deg,rgba(232,0,0,1),rgba(253,223,117,1));
	    border-radius:39upx;
		/* box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);		 */
	}
</style>

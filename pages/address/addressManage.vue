<template>
	<view class="content">
		<view class="delete-view">
			<view>
				删除
			</view>
		</view>
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.name" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号码</text>
			<input class="input" type="number" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">所在地区</text>
<!-- 			<text @click="chooseLocation" class="input">
				{{}}
			</text> -->
			<input class="input" type="text" v-model="addressData.addressName" placeholder="请填写所在地区" placeholder-class="placeholder" />
			<text @click="chooseLocation" class="yticon icon-shouhuodizhi"></text>
		</view>
		<view class="row b-b"> 
			<text class="tit">详情地址</text>
			<input class="input" type="text" v-model="addressData.area" placeholder="楼号、门牌" placeholder-class="placeholder" />
		</view>
		<view style="background-color: #FFFFFF;" class="">
			<view class="row b-b">
				<text class="tit">标签</text>
				<view class="label-box">
					<view class="label-item">家</view>
					<view class="label-item">公司</view>
					<view class="label-item">学校</view>
					<view class="label-item">+</view>
				</view>
			</view>
		
			<view class="label-import">
				<input class="input2" type="text" v-model="addressData.area" placeholder="" placeholder-class="placeholder" />
				<view class="butt">确定</view>
			</view>
		</view>
		<view class="row default-row">
			<view style="display:flex;flex-direction:column;">
				<text class="tit">设为默认</text>
				<text class="tit2">提醒：每次下单会默认推荐使用该地址</text>
			</view>
			<switch :checked="addressData.defaule" color="#E70202" @change="switchChange" />
		</view>
		<button class="add-btn" @click="confirm">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				addressData: {
					name: '',
					mobile: '',
					addressName: '在地图选择',
					address: '',
					area: '',
					default: false
				}
			}
		},
		onLoad(option){
			let title = '新增收货地址';
			if(option.type==='edit'){
				title = '编辑收货地址'
				
				this.addressData = JSON.parse(option.data)
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			switchChange(e){
				this.addressData.default = e.detail;
			},
			
			//地图选择地址
			chooseLocation(){
				uni.chooseLocation({
					success: (data)=> {
						this.addressData.addressName = data.name;
						this.addressData.address = data.name;
					}
				})
			},
			
			//提交
			confirm(){
				let data = this.addressData;
				if(!data.name){
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.mobile)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!data.address){
					this.$api.msg('请在地图选择所在位置');
					return;
				}
				if(!data.area){
					this.$api.msg('请填写门牌号信息');
					return;
				}
				
				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				this.$api.prePage().refreshList(data, this.manageType);
				this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				setTimeout(()=>{
					uni.navigateBack()
				}, 800)
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}
	.label-box {
		display:flex;
		// justify-content: space-between;
		justify-content : space-around;
		// width: 336upx;
		font-size:24upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(51,51,51,1);
	  .label-item {
		  margin: 0 10upx;
		  text-align: center;
		  width:84upx;
		  height:38upx;
		  border:1px solid rgba(165,165,165,1);
		  border-radius:19upx;
		}
	}
	.label-import {
		display:flex;
		width:420upx;
		height:38upx;
		margin: 0 auto;
		background:rgba(246,246,246,1);
		// background-color: red;
		border-radius:19upx;
	   margin-bottom: 10rpx;
	   .butt {
		   text-align: center;
		   width:84upx;
		   height:38upx;
		   background:rgba(235,233,234,1);
		   border-radius:0px 19px 19px 0px;
		   font-size:20upx;
		   font-family:PingFang SC;
		   font-weight:400;
		   color:rgba(255,255,255,1)

	   }
	}
    .delete-view {
		display:flex;
		justify-content : flex-end;
		background-color: #FFFF;
		view {
			margin-right: 14upx;
			font-size:30upx;
			font-family:PingFang SC;
			font-weight:500;
			color:rgba(51,51,51,1);
		}
	}
	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			margin-right: 26upx;
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.tit2 {
			font-size:20upx;
			font-family:PingFang SC;
			font-weight:400;
			color:rgba(51,51,51,1);
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.input2{
			font-size: 20upx;
			color: $font-color-dark;
			margin-left: 10rpx;
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.default-row{
		display:flex;
		justify-content : space-between;
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
	background:linear-gradient(90deg,rgba(232,0,0,1),rgba(253,223,117,1));
	border-radius:39px;
	}
</style>

<template>
	<!-- --------------------------------------待评价列表--------------------------------------------- -->
	<view class="goods">
		<view class="goods-item">
			<view class="goods-img">
				<image src="https://img12.360buyimg.com/jdcms/s150x150_jfs/t1/120698/34/6624/142981/5f0566a0E56d01764/6c7e62787ee60daa.jpg.webp" mode=""></image>
			</view>
			<view class="goods-body">
				<text>MONTBLANC 万宝龙 大班系列签字笔 163/112678</text>
				<view class="Bottom">
					<view>评价</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	page {
		background-color: #F6F6F6;
	}
	.goods {
		.goods-item {
		  display:flex;
			
		  margin: 20upx 0;
		  padding: 30upx;
		  width:750upx;
		  height:260upx;
		  background:rgba(255,255,255,1);
		  border-radius:6upx;
		  .goods-img {
			  width:200upx;
			  height:205upx;
			  image {
				  width: 100%;
				  height: 100%;
			  }
		  }
		  .goods-body {
			  display:flex;
			  flex-direction:column;
			  justify-content : space-between;
			  margin-left: 14upx;
			  font-size:22upx;
			  font-family:PingFang SC;
			  font-weight:500;
			  color:rgba(51,51,51,1);
			  .Bottom {
				  display:flex;
				  justify-content : flex-end;
				  view{
					  width:136upx;
					  height:46upx;
					  border:1px solid rgba(231,2,2,1);
					  border-radius:23upx;
					  text-align: center;
					  color: #E70202;
				  }
				  
			  }
		  }
		}
		
	}
</style>

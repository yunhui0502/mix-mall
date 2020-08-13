// 获取秒杀商品
import store from '../store/';
let product = 'https://www.tjsichuang.cn:1443/api/product'
// let product = 'http://192.168.1.128:9095'
function getProductSeckill(params = {}, handleResult) {
  uni.request({
    url: product + "/hfProduct/getActivityProductList?activityType=seckillActivity",
    data: params,
    header: {
      'bossId': store.state.bossId,
    },
    success: res => handleResult(res),
    fail: res => {
      console.log(params, res);
    }
  });
}
//团购
function getProductGroup(handleResult) {
  uni.request({
    url:  product + '/hfProduct/getActivityProductList?activityType=groupActivity',
	header: {
	 'bossId': store.state.bossId,
	},
    success: res => handleResult(res),
    fail: (res) => {
      console.log(params, res);
    }
  });
}
//精选
function getTopRanking(handleResult) {
  let params = {
  };
  uni.request({
    url:  product + '/hfProductActivity/findProdcutActivity?activityType=seniorityActivity',
    header: {
      'bossId': store.state.bossId,
    },
    success: res => handleResult(res),
    fail: (res) => {
      console.log(params, res);
    }
  });
}
// 首页一级分类
function getCategory(params = {}, handleResult) {
  params.quantity = 3;
  uni.request({
    url:  product + '/product/category',
    data: params,
    header: {
      'bossId': store.state.bossId,
      'token': uni.getStorageSync('data').token,
    },
    success: res => handleResult(res),
    fail: (res) => {
      console.log(params, res);
    }
  });
}
 // 获取一级分类下的商品
function getCategoryByOneLevel(params, handleResult) {
  uni.request({
    url:  product + '/hfProduct/getCategoryByOneLevel',
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'bossId': store.state.bossId,
      'token': uni.getStorageSync('data').token,
    },
    method: 'get',
    data: params,
    success: res => handleResult(res),
    fail: (res) => {
      console.log(res);
    }
  });
}
// 获取首页轮播图请求
function getRotation(handleResult) {
  let params = {
  };
  uni.request({
     url:  product + '/hfProductActivity/getActivityRatation',
    header: {
      'bossId': store.state.bossId,
    },
    success: res => handleResult(res),
    fail: (res) => {
      console.log(params, res);
    }
  });
}
//分类导航
function selectIconAndUrl(params, handleResult) {
  uni.request({
    url: product + '/goods/selectIconAndUrl',
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'bossId': store.state.bossId,
      'token': uni.getStorageSync('data').token,
    },
    method: 'get',
    data: params,
    success: res => handleResult(res),
    fail: (res) => {
      console.log(res);
    }
  });
}

function getProductDetail(params, handleResult) {
	console.log(params)
  uni.request({
    url: product + '/hfProduct/getDetail',
    data: params,
    header: {
     'bossId': store.state.bossId,
     'token': uni.getStorageSync('data').token,
    },
    success: res => handleResult(res),
    fail: (res) => {
      console.log(params, res);
    }
  });
}
// 获取商品介绍图
function selectProductIntroducePictrue(params, handleResult) {
  uni.request({
    url: product + '/product/selectProductIntroducePictrue',
    method: 'get',
    data: params,
    header: {
    'bossId': store.state.bossId,
    'token': uni.getStorageSync('data').token,
    },
    success: res => handleResult(res),
    fail: (res) => {
      console.log(res);
    }
  });
}

export default {
  getProductSeckill: getProductSeckill,
  getProductGroup: getProductGroup,
  getTopRanking: getTopRanking,
  getCategoryByOneLevel: getCategoryByOneLevel,
  getCategory: getCategory,
  getRotation: getRotation,
  selectIconAndUrl: selectIconAndUrl,
  getProductDetail: getProductDetail,
  selectProductIntroducePictrue: selectProductIntroducePictrue,
};

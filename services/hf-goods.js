import store from '../store/';
let product = 'https://www.tjsichuang.cn:1443/api/product'


function getGoodDetailByProductId(params={}, handleResult) {
  uni.request({
    url: product + '/goods/getGoodDetailByProductId',
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

export default {
  getGoodDetailByProductId: getGoodDetailByProductId,

};

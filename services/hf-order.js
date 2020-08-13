import store from '../store/';
let order = 'https://www.tjsichuang.cn:1443/api/order'


// 普通订单
function createOrder(params={}, handleResult) {
  uni.request({
    url: order + '/hf-order/Ordercreate',
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'bossId': store.state.bossId,
      'token': uni.getStorageSync('data').token,
    },
    data: params,
    success: res => handleResult(res),
    fail: (res) => {
      console.log(params, res);
    }
  });
}

export default {
  createOrder: createOrder,

};

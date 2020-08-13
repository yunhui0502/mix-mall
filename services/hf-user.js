

function login(params = {}, handleResult,) {
  uni.request({
    url: 'https://www.tjsichuang.cn:1443/api/user/login/loginPhone',
    data: params,
    // header: {
    //   'bossId': app.globalData.bossId,
    // },
    success: res => handleResult(res),
    fail: (res) => {
      console.log(params, res);
    }
  });
}

function code(params = {}, handleResult) {
  uni.request({
    url: 'https://www.tjsichuang.cn:1443/api/user/user/code',
    data: params,
      method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
    success: res => handleResult(res),
    fail: (res) => {
      console.log(params, res);
    }
  });
}


export default {
  login: login,
  code: code
};
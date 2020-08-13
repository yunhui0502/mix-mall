const commonUrl = 'https://www.tjsichuang.cn:1443/api';//公共路径
//post 封装
function postRequest(url,data){
    var promise = new Promise((resolve,reject)=>{
        var that = this;
        var params = data;
        uni.request({
            url:commonUrl+url,
            data:params,
            method:'POST',
            header:{
               'content-type':'application/x-www-form-urlencoded',
               'token':uni.getStorageSync('token')
            },
            success:function(res){
               resolve(res)
            },
            error:function(error){
               reject(error)
            }
        })
    })
    return promise
}

//get 封装
function getRequest(url,data){
   var promise = new Promise((resolve,reject)=>{
       var that = this;
       var params = data;
       uni.request({
            url:commonUrl + url,
            data:params,
            method:'GET',
            header:{
               'content-type':'application/json'
            },
            success:function(res){
               resolve(res)
            },
            error:function(error){
               reject(error)
            }
       })
   })
   return promise
}
module.exports = {
   postRequest,
   getRequest
}
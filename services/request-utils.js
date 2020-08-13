
import util from './util.js';

function setImageUrls(list) {
  for (let item of list) {
    if (util.isRealNum(item.fileId)) {
      item.imageUrl = 'https://www.tjsichuang.cn:1443/api/product/goods/getFile?fileId=' + item.fileId;
    }
  }
}


export default {
  setImageUrls: setImageUrls
};
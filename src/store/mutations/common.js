// 每个页面的mutation通过文件进行隔离，防止以后数据很多
import * as Types from '../types/index'
const mutation = {
  [Types.FOOD_LIST] (state, data) {
    state.foodList = data
  },
  [Types.SHOP_INFO] (state, data) {
    state.shopInfo = data
  }
}

export default mutation

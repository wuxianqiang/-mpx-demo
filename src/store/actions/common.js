import { data } from '../../data/shop'
import * as Types from '../types/index'
import { Food } from '../../utils/common'

// 每个页面的action通过文件进行隔离，防止以后数据很多
export const updateShopList = function ({ commit }, shopList) {
  // 当setData的数据很多的时候，只保留需要使用的的字段，优化技巧
  const categoryList = data.data.categoryList || []
  const result = categoryList.map(item => {
    const { spuList = [], categoryName = '', categoryType = '' } = item
    const list = spuList.map(current => new Food(current))
    const temp = { categoryName, categoryType, spuList: list }
    return temp
  })
  console.log(result)
  commit(Types.FOOD_LIST, result)
  commit(Types.SHOP_INFO, data.data.shopInfo)
}

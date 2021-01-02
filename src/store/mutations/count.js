// 每个页面的mutation通过文件进行隔离，防止以后数据很多
const mutation = {
  addCallback (state, { tag, spuId }) {
    const foodList = state.foodList
    const current = foodList.find(item => item.tag === tag)
    const index = current.spuList.findIndex(item => item.spuId === spuId)
    const target = current.spuList[index]
    if (current && target) {
      current.count++
      current.spuList.splice(index, 1, { ...target, count: target.count + 1 })
    } else {
      console.log('系统错误')
    }
  },
  reduceCallback (state, { tag, spuId }) {
    const foodList = state.foodList
    const current = foodList.find(item => item.tag === tag)
    const index = current.spuList.findIndex(item => item.spuId === spuId)
    const target = current.spuList[index]
    if (current && target) {
      current.count--
      current.spuList.splice(index, 1, { ...target, count: target.count - 1 })
    } else {
      console.log('系统错误')
    }
  }
}

export default mutation

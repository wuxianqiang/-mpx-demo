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
      const selectIndex = state.selectList.findIndex(item => item.spuId === spuId)
      const selectTarget = state.selectList[selectIndex]
      if (selectTarget) {
        selectTarget.count++
      } else {
        state.selectList.push({ ...target, count: target.count + 1, tag })
      }
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
      const selectIndex = state.selectList.findIndex(item => item.spuId === spuId)
      const selectTarget = state.selectList[selectIndex]
      if (selectTarget) {
        if (selectTarget.count === 1) {
          state.selectList.splice(selectIndex, 1)
          // 关闭弹窗
          if (state.selectList.length === 0) {
            state.showVisible = false
          }
        } else {
          selectTarget.count--
        }
      }
    } else {
      console.log('系统错误')
    }
  },
  clearCallback (state) {
    state.showVisible = false
    state.selectList = []
    const foodList = state.foodList
    foodList.forEach(item => {
      item.count = 0
      item.spuList.forEach(item => {
        item.count = 0
      })
    })
  },
  setState (state, params) {
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        state[key] = params[key]
      }
    }
  }
}

export default mutation

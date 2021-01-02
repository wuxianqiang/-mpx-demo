class Food {
  constructor (item) {
    this.spuName = item.spuName
    this.spuDesc = item.spuDesc
    this.originPrice = item.originPrice
    this.currentPrice = item.currentPrice
    this.bigImageUrl = item.bigImageUrl
    this.spuId = item.spuId
    this.saleVolumeDecoded = item.saleVolumeDecoded
    this.count = 0
  }
}

export {
  Food
}

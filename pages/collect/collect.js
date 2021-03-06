// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 1,
        tab: "收藏的店铺",
        isActive: true,
      },
      {
        id: 2,
        tab: "收藏的商品",
        isActive: false
      },
      {
        id: 3,
        tab: "关注的商品",
        isActive: false
      },
      {
        id: 4,
        tab: "我的足迹",
        isActive: false
      }
    ],
    collectGoods: []
  },

  // 改变tab组件的激活状态
  handelItemchange(e){
    const {index} = e.detail
    const {tabs} = this.data
    tabs.map((item, i) => i === index ? item.isActive = true : item.isActive = false)
    this.setData({
      tabs
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 获取收藏来的商品列表
    const collectGoods = wx.getStorageSync('collectGoods') || []
    this.setData({
      collectGoods
    })
    console.log(collectGoods)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 提交表单
  submitAddress(e){
    getApp().globalData.addressInfo = e.detail.value
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },

  // 选择收货地址
  selectAddress(){
    console.log('选择收货地址')
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res)
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 10,
          success: (res) => {
            console.log(res)
            wx.chooseLocation({
              success: (res) => {
                console.log(res)
                getApp().globalData.address = res.address + '(' + res.name + ')';
                console.log(this.data.address)
                wx.stopLocationUpdate({
                  success: (res) => {
                    console.log(res)
                  }
                })
                wx.redirectTo({
                  url: '/pages/address/address',
                })
              }
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
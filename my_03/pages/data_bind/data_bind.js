// pages/data_bind/data_bind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"LOVE",
    userName:"",
    userAvatar:"/static/home_04.png",
    userLocation:"请选择你的位置",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },


  changeData:function(){
    console.log(this.data.msg);
    // this.data.msg = "ok";  只改后端
    this.setData({msg:"爱"})
  },
  // getUserInfo: function(){
  //   var that = this
  //   // 调用微信接口，获取当前用户信息
  //   wx.getUserInfo({
  //     // 调用成功之后触发
  //     success: function(res){
  //       // console.log(res)
  //       // console.log(res.userInfo.nickName);
  //       that.setData({
  //         userName: res.userInfo.nickName,
  //         userAvatar:res.userInfo.avatarUrl
  //       })
  //     },
  //     // 调用失败后触发
  //     fail: function(res){
  //       console.log("失败了")
  //     }
  //   })
  // },

  get_user_info:function(){
    // wx.openSetting({})
    var that = this
    // 调用微信接口，获取当前用户信息
    wx.getUserInfo({
      // 调用成功之后触发
      success: function(res){
        // console.log(res)
        // console.log(res.userInfo.nickName);
        that.setData({
          userName: res.userInfo.nickName,
          userAvatar:res.userInfo.avatarUrl
        })
      },
      // 调用失败后触发
      fail: function(res){
        console.log("失败了")
      }
    })
  },
  
  getLocation:function(){
    let that = this
    wx.chooseLocation({
      success: function(res){
        // console.log(res.address)
        that.setData({userLocation:res.address})
      }
    })
  },
})
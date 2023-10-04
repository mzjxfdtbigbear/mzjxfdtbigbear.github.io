// pages/pay1/pay1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  pay1: function(){
    // 支付功能1的逻辑 //暂时用显示图片成功模拟支付成功，在sucess里执行
  },

  back: function() {       
    wx.navigateTo({
      url: '/pages/index/index',
      success: (result) => {console.log("Pay 1js"); },
      fail: (res) => {console.log("Payff");},
      complete: (res) => {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.createSelectorQuery()
    .select('#myCanvas-1') // 在 WXML 中填入的 id
    .fields({ node: true, size: true })
    .exec((res) => {
        // Canvas 对象
        const canvas = res[0].node
        // Canvas 画布的实际绘制宽高
        const renderWidth = res[0].width
        const renderHeight = res[0].height
        // Canvas 绘制上下文
        const ctx = canvas.getContext('2d')

        // 初始化画布大小
        const dpr = wx.getWindowInfo().pixelRatio
        canvas.width = renderWidth * dpr
        canvas.height = renderHeight * dpr
        ctx.scale(dpr, dpr)
            // 绘制前清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // 若干绘制调用
    ctx.fillRect(0, 0, 50, 50)
    ctx.fillRect(20, 20, 50, 50)
    const image = canvas.createImage()
  image.onload = () => {
    setInterval(() => {  
      ctx.clearRect(0, 0, canvas.width, canvas.height) 
      ctx.drawImage(image,0,0,350,400, )
      },100)
    }
      image.src ="/images/burn.gif"


    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
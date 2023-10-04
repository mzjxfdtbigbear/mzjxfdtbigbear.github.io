// pages/pay2/pay2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {  
    loopCount: 0, // 循环次数计数器  
    maxLoops: 5, // 最大循环次数  
    videoAContext: null,  
    videoBContext: null,  
    audioMContext: null,  
    isVideoAPlaying: true, // 视频A是否正在播放  
    isVideoBPlaying: false, // 视频B是否正在播放  
    isAudioMPlaying: true // 音频m是否正在播放  
  },  
  onReady: function (res) {  
    this.videoAContext = wx.createVideoContext('videoA')  
    this.videoBContext = wx.createVideoContext('videoB')  
    this.audioMContext = wx.createInnerAudioContext() // 创建音频上下文对象  
    this.playVideoA()  
  },  
  playVideoA: function () {  
    if (this.data.isVideoAPlaying) {  
      this.videoAContext.play()  
      if (!this.data.isAudioMPlaying) { // 如果音频m没有正在播放，则开始播放音频m  
        this.audioMContext.src = '/sound/Prajnaparamita.m4a' // 设置音频m的文件路径  
        this.audioMContext.play()  
        this.setData({ isAudioMPlaying: true }) // 更新音频m的播放状态为正在播放  
      }  
    } else {  
      this.videoBContext.play()  
    }  
  },  
  pauseVideoA: function () {  
    this.videoAContext.pause()  
  },  
  pauseVideoB: function () {  
    this.videoBContext.pause()  
  },  
  pauseAudioM: function () {  
    this.audioMContext.pause()  
  },  
  onVideoEnded: function () {  
    const loopCount = this.data.loopCount + 1  
    if (loopCount < this.data.maxLoops) {  
      this.setData({ loopCount })  
      this.playVideoA() // 视频A结束后继续循环播放  
    } else {  
      this.setData({ isVideoAPlaying: false, isVideoBPlaying: true, isAudioMPlaying: false }) // 播放视频B前的设置，同时停止音频m的播放  
      this.pauseAudioM() // 停止音频m的播放  
      this.playVideoA() // 播放视频B  
    }  
  },  
  onVideoBEnded: function () {  
    // 在这里执行视频播放结束后的操作，例如跳转至其他页面  
    wx.navigateTo({ url: '//pages/index/index' }) // 要跳转的页面路径  
  },  
  onAudioEnded: function () {  
    // 音频m播放结束后的操作，这里不需要做任何处理，因为我们在onVideoEnded方法中已经设置了停止音频m的播放  
  },  
  videoErrorCallback: function (e) {  
    console.log('视频错误信息:', e.detail.errMsg)  
  },  
  audioErrorCallback: function (e) {  
    console.log('音频错误信息:', e.detail.errMsg)  
  }   ,
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
    .select('#myVideo') // 在 WXML 中填入的 id
    .fields({ node: true, size: true })
    .exec((res) => {   
    this.videoContext = wx.createVideoContext('myVideo')
    this.videoContext.play()})
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

  },
  bindPlayVideo() {
    console.log('1')
    this.videoContext.play()
  },
  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})
// index.js
Page({  
  pay1: function() {  
    // 支付功能1的逻辑  
    console.log("Pay 1");  
    //暂时用显示图片成功模拟支付成功，在sucess里执行
    wx.navigateTo({
      url: '/pages/pay1/pay1',

      success: (result) => {console.log("Pay 1js"); },
      fail: (res) => {console.log("Payff");},
      complete: (res) => {},
    })


    

  },  
  pay2: function() {  
    // 支付功能2的逻辑  
    console.log("Pay 2");  
    wx.navigateTo({
      url: '/pages/pay2/pay2',

      success: (result) => {console.log("Pay 2js"); },
      fail: (res) => {console.log("Payff");},
      complete: (res) => {},})
  },  
  pay3: function() {  
    // 支付功能3的逻辑  
    console.log("Pay 3");  
  },  
  pay4: function() {  
    // 支付功能4的逻辑  
    console.log("Pay 4");  
  }  
})

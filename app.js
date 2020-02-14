//app.js
App({
  onLaunch: function () {
    this.store.sys = wx.getSystemInfoSync()
  },
  store:{
    sys: {}
  }
})
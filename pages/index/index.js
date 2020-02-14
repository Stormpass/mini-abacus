//index.js
//获取应用实例
const app = getApp()
const beadWidth = 22
const borderWidth = 10
let audioCtx = null
Page({
  data: {
    windowWidth: app.store.sys.windowWidth,
    upWindowWidth: (app.store.sys.windowWidth - 30) / 3 * 1
  },
  /**
   * 播放 拨算盘 的声音
   * 实际测试中存在问题
   */
  playVoice() {
    console.log('play voice be called')
    // audioCtx.play()
  },
  onLoad: function () {
    audioCtx = wx.createAudioContext('beadMove')
  },
  onPlay() {
    console.log('play')
  },
  onError() {
    console.log('error')
  }
})

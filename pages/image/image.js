Page({
  data: {
    url: "",
    hidden: false,
    loadingText: "加载中...",
    toastText: "数据异常",
    modalHidden: true,
  },
  onLoad: function (options) {
    that = this;
    if (options == null || options.url == null) {
      this.setData({ hidden: true });
      return;
    }

    this.setData({
      hidden: true,
      toastHidden: true,
      url: options.url
    })
  },
  //Toast信息改变
  onToastChanged: function (event) {
    this.setData({ toastHidden: true });
  },
  //长安
  longOnClick: function (e) {
    console.log("长安了")
    this.setData({ modalHidden: false })
  },
  // 保存
  onSaveClick: function (event) {
    var mUrl = "";
    if (event.currentTarget.dataset.url != null)
      mUrl = event.currentTarget.dataset.url;
    console.log("download：" + mUrl);
    saveImage(mUrl);
  },
  // 取消
  onCancelClick: function (event) {
    this.setData({ modalHidden: true });
  },
})

var that;

/**
 * 保存图片
 */
function saveImage(mUrl) {
  that.setData({
    hidden: false,
    toastHidden: true,
    modalHidden: true,
    loadingText: "下载中..."
  });
  console.log(mUrl);
  wx.downloadFile({
    url: mUrl,
    type: 'image',
    success: function (res) {
      console.log("download success");
      that.setData({
        hidden: true,
        toastHidden: false,
        toastText: "恭喜你，图片保存成功"
      });
    },
    fail: function (res) {
      console.log("download fail");
      that.setData({
        hidden: true,
        toastHidden: false,
        toastText: "保存失败，请稍后再试"
      });
    },
    complete: function (res) {
      console.log("download complete");
    }
  })
}
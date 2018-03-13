//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [],
    hidden: false,
    loading: false,
    loadmorehidden: true,
    plain: false
  },

  onItemClick: function (event) {
    console.log("点击了")
    var targetUrl = "/pages/image/image";
    console.log(event.currentTarget.dataset.url)
    if (event.currentTarget.dataset.url != null)
      targetUrl = targetUrl + "?url=" + event.currentTarget.dataset.url;
      console.log(targetUrl)
    wx.navigateTo({
      url: targetUrl
    });
  },

  // onLoad: function () {
  //   console.log("------加载")
  //   var that = this;
  //   getData(that, mCurrentPage + 1);
  // }
  loadMore: function (event) {
    var that = this
    getData(that, mCurrentPage + 1);
  },

   onLoad: function () {
    console.log('onLoad')
    var that = this
    getData(that, mCurrentPage + 1);
  }

})

/**
 * 定义几个数组用来存取item中的数据
 */
var mUrl = [];
var mDesc = [];
var mWho = [];
var mTimes = [];
var mTitles = [];

var mCurrentPage = 0;

//导包
var Constant = require('../../utils/url.js');

function getData(that, page) {
  console.log(Constant.GET_MNEIZHI_URL + page)
  wx.request({
    url: Constant.GET_MNEIZHI_URL + page,
    header: {
      "Content-Type": "application/json"
    },
    success: function (res) {
      if (res == null ||
        res.data == null ||
        res.data.results == null ||
        res.data.results.length <= 0) {

        console.error("god bless you...");
        return;
      }

      for (var i = 0; i < res.data.results.length; i++) {
        bindData(res.data.results[i])
      }

      var itemLists = [];
      for (var i = 0; i < mUrl.length; i++) {
        itemLists.push({
          url: mUrl[i]
        })
      }

      that.setData({
        items: itemLists,
        hidden: true,
        loadmorehidden: false,
      });

      mCurrentPage = page;

    }
  })
}


function bindData(items) {
  var url = items.url.replace("//ww", "//ws");

  mUrl.push(url);
}

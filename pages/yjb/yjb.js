//导包
var WxAutoImage = require('../../utils/wxAutoImageCal.js');
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 1000,
    indicatorDots: true,
    autoplay: true,
    iconArray: [
      {
        "iconUrl": "../../images/icon-qiandao.png",
        "textArray": "才艺"
      },
      {
        "iconUrl": "../../images/icon-qiandao.png",
        "textArray": "才艺"
      },
      {
        "iconUrl": "../../images/icon-qiandao.png",
        "textArray": "才艺"
      },
      {
        "iconUrl": "../../images/icon-qiandao.png",
        "textArray": "才艺"
      },
      {
        "iconUrl": "../../images/icon-qiandao.png",
        "textArray": "才艺"
      },{
        "iconUrl": "../../images/icon-qiandao.png",
        "textArray": "才艺"
      },
      {
        "iconUrl": "../../images/icon-qiandao.png",
        "textArray": "才艺"
      },
      {
        "iconUrl": "../../images/icon-qiandao.png",
        "textArray": "才艺"
      }
    ],
    infoArray: [
      {
        "infoText":"黑豹（土豪，宫斗，战斗...）",
        "infoUrl":"../../images/huaju.jpeg"
      },
      {
        "infoText": "黑豹（土豪，宫斗，战斗...）",
        "infoUrl": "../../images/huaju.jpeg"
      },
      {
        "infoText": "黑豹（土豪，宫斗，战斗...）",
        "infoUrl": "../../images/huaju.jpeg"
      }
    ]
  },
  cusImageLoad: function (e) {
    var that = this;
    that.setData(WxAutoImage.wxAutoImageCal(e));
  }
})
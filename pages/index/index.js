const app = getApp()

Page({
  data:{
    nowPage: "personal",
    nowIndex: 4,
    tabBar:[
      {
        "iconClass":"iconfont icon-shouye",
        "text":"首页",
        "tapFunction":"toHome",
        "active":""
      },
      {
        "iconClass":"iconfont icon-ziyuan",
        "text":"菜单",
        "tapFunction": "toMenu",
        "active": ""
      },
      {
        "iconClass":"iconfont icon-dingdan",
        "text":"订单",
        "tapFunction": "toOrders",
        "active": ""
      },
      {
        "iconClass":"iconfont icon-gouwuche1",
        "text":"购物车",
        "tapFunction": "toCar",
        "active": ""
      },
      {
        "iconClass":"iconfont icon-geren",
        "text":"个人",
        "tapFunction": "toPersonal",
        "active": "active"
      }
    ],
    navbarInitTop:0,
    isFixedTop:false
  },
  getNavbarInitTop(val){
    this.setData({
      navbarInitTop:val.detail
    })
  },
  onPageScroll(e) {
    var scrollTop = parseInt(e.scrollTop); //滚动条距离顶部高度
    //判断'滚动条'滚动的距离 和 '元素在初始时'距顶部的距离进行判断
    var isSatisfy = scrollTop >= this.data.navbarInitTop ? true : false;
    //为了防止不停的setData, 这儿做了一个等式判断。 只有处于吸顶的临界值才会不相等
    if (this.data.isFixedTop === isSatisfy) {
      return false;
    }
    this.setData({
      isFixedTop: isSatisfy
    });
  },
  toHome(){
    this.setData({
      nowPage:"home",
      nowIndex: 0
    })
  },
  toMenu() {
    this.setData({
      nowPage: "menu",
      nowIndex: 1
    })
  },
  toOrders() {
    this.setData({
      nowPage: "orders",
      nowIndex: 2
    })
  },
  toCar() {
    this.setData({
      nowPage: "car",
      nowIndex: 3
    })
  },
  toPersonal() {
    this.setData({
      nowPage: "personal",
      nowIndex: 4
    })
  }
})
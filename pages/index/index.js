const app = getApp()

Page({
  data:{
    nowPage: "home",
    nowIndex: 0,
    tabBar:[
      {
        "iconClass":"iconfont icon-shouye",
        "text":"首页",
        "tapFunction":"toFirst",
        "active":"active"
      },
      {
        "iconClass":"iconfont icon-ziyuan",
        "text":"菜单",
        "tapFunction": "toSecond",
        "active": ""
      },
      {
        "iconClass":"iconfont icon-dingdan",
        "text":"订单",
        "tapFunction": "toSecond",
        "active": ""
      },
      {
        "iconClass":"iconfont icon-gouwuche1",
        "text":"购物车",
        "tapFunction": "toSecond",
        "active": ""
      },
      {
        "iconClass":"iconfont icon-geren",
        "text":"个人",
        "tapFunction": "toSecond",
        "active": ""
      }
    ]
  }
})
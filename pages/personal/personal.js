// pages/personal/personal.js
Component({
  options: {
    addGlobalClass: true
  },
  properties:{
    isFixedTop:{
      type: Boolean,
      value: false
    }
  },
  data: {
    navbarInitTop:0,
    isFold: true
  },
  ready() {
    if (this.data.navbarInitTop == 0) {
      //获取节点距离顶部的距离
      wx.createSelectorQuery().in(this).select('#navbar').boundingClientRect((rect) => {
        if (rect && rect.top > 0) {
          var navbarInitTop = parseInt(rect.top);
          this.triggerEvent('getNavbarInitTop',navbarInitTop);
        }
      }).exec();
    }
  },
  methods:{
    tapFold() {
      this.setData({
        isFold: !this.data.isFold
      })
    },
  }
})
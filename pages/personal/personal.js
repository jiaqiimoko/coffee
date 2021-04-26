// pages/personal/personal.js
Component({
  properties:{
    isFixedTop:{
      type: Boolean,
      value: false
    }
  },
  data: {
    navbarInitTop:0
  },
  /**
   * 生命周期函数--监听页面显示
   */
  ready() {
    if (this.data.navbarInitTop == 0) {
      //获取节点距离顶部的距离
      wx.createSelectorQuery().in(this).select('#navbar').boundingClientRect((rect) => {
        if (rect && rect.top > 0) {
        var navbarInitTop = parseInt(rect.top);
        this.setData({
          navbarInitTop: navbarInitTop
        });
        }
      }).exec();
    }
  },
})
// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad:function(otpions){
    // 发送网络请求
    // https://cnkmprice.kmzyw.com.cn/pageIndex.action?loadType=11
    // https://www.kmzyw.com.cn/bzjsp/app_remote/app_info_index_site_list.jsp
   
    // wx.request({
    //   url: 'https://cnkmprice.kmzyw.com.cn/pageIndex.action?loadType=11',
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
    wx.request({
      url: 'http://httpbin.org/post',
      method : 'post',
      data :{
        name:'coderwhy',
        age:25
      }
      ,
      success:function(res){
          console.log(res)
      }
    })

  }
 
})
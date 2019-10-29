Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '我是小程序语法',
    students: [
      { id: 1, name: '小明', age: 20 },
      { id: 2, name: '小张', age: 22 },
      { id: 3, name: '小张', age: 25 },
      { id: 4, name: '小李', age: 25 },
      { id: 5, name: '小桌', age: 29 }
    ],
    conuter: 0
  },
  /**
   * 点击事件函数
   */
  handlerBtnClick(){
      // 错误的写法
      // this.data.conuter +=1;
      // console.log(this.data.conuter);
      this.setData({
        conuter:this.data.conuter += 1
      })
      
  },
  /**
   * 点击事件函数
   */
  handlerBtnDownClick() {
    // 错误的写法
    // this.data.conuter +=1;
    // console.log(this.data.conuter);
    this.setData({
      conuter: this.data.conuter -= 1
    })

  }

})
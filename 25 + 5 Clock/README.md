源码：https://codepen.io/pocowi/pen/oNebJOg
示例：https://codepen.io/freeCodeCamp/pen/XpKrrW

参考：
1. [定时器踩坑！为什么用了React Hook之后倒计时不动了？](https://juejin.cn/post/6932425746493210632)
   此方法只适用于单次倒计时，而计时器的秒针需要循环计数
2. 让秒针循环计时，在useEffect中加入setSec(60)
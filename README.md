# mini-abacus
一个模拟算盘的微信小程序

![alt](https://github.com/Stormpass/mini-abacus/blob/master/shoot.png?raw=true)

这个小程序只有一个页面，模拟了算盘。

因为小程序架构的原因，视图层与逻辑层分别在不同的原生容器中运行。

这导致小程序往往不能够很好地处理触摸操作（无法及时响应）。

幸运的是，微信小程序可以 通过 wxs 在视图层运行逻辑。

## 知识点

+ 运用 wxs 处理页面上的事件
+ wxs 获取 wx api 的数据
+ 通过缓存提高效率。
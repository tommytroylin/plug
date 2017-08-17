electron-pubsub
---

一个简单的electron发布订阅系统。

实现原理
===

所有事件由主进程负责转发。
由主进程发送的事件：通过 emitter 通知主进程中的其他模块；通过 ipc 通知所有子进程。
由子进程发送的事件：通过 ipc 通知主进程，同时请求主进程进行广播，主进程收到后，会将该事件推送给所有子进程。
模块仅支持异步事件。
事件的传参不支持 function 。（因为数据通过 JSON 进行传递，过程中会将 function 转化为 null 。）

方法
===

### 初始化

```javascript
// 在主进程中使用，
const pubsub = require('electron-pubsub');
pubsub.init();
```

在使用此模块之前必须进行初始化。

### 订阅

```javascript
// 主进程或子进程中
pubsub.subscribe('myTopic', (event, ...args) => {
    // do something here.
});

pubsub.once('anotherTopic', (event, ...args) => {
    // do something here.
});
```

### 发布

```javascript
// 主进程或子进程中
pubsub.publish('myTopic'[, ...args]);
```

### 取消订阅

```javascript
// 主进程或子进程中
pubsub.unsubscribe('myTopic', callback);
pubsub.unsubscribe('myTopic');
```

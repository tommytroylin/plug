import './index.less';

plug.subscribe('eventFromMain', (event, message) => {
    console.log('渲染进程收到了' + message);
});

plug.subscribe('eventFromRenderer', (event, message) => {
    console.log('渲染进程收到了' + message);
});

plug.publish('eventFromRenderer', '从渲染进程发送的事件');


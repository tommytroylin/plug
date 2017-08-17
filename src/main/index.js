import './plug';
import './bootstrap';

plug.subscribe('eventFromMain', (event, message) => {
    console.log('主进程收到了' + message);
});

plug.subscribe('eventFromRenderer', (event, message) => {
    console.log('主进程收到了' + message);
});

setTimeout(() => {
    plug.publish('eventFromMain', '从主进程发送的事件');
}, 2000);

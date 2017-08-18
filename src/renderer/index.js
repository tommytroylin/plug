import './index.less';

plug.subscribe('isDev', (event, message) => {
    alert('主进程:' + message);
});

alert('渲染进程：' + plug.isDev);

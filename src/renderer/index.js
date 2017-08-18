import './index.less';

plug.subscribe('isDev', (event, ...args) => {
    alert('主进程:' + args);
});

alert('渲染进程：' + plug.isDev);

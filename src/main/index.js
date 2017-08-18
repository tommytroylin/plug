import './preload';
import './bootstrap';

setTimeout(() => {
    plug.publish('isDev', plug.isDev);
}, 2000);

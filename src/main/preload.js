const pubsub = require('../../modules/electron-pubsub');

console.log('preload loaded');

global.plug = {
    subscribe: pubsub.subscribe,
    once: pubsub.once,
    publish: pubsub.publish,
    unsubscribe: pubsub.unsubscribe,
};

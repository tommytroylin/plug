import pubsub from '../../modules/electron-pubsub';

global.plug = {
    subscribe: pubsub.subscribe,
    once: pubsub.once,
    publish: pubsub.publish,
    unsubscribe: pubsub.unsubscribe,
}

pubsub.init();


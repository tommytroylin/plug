const pubsub = require('../../modules/electron-pubsub');
const is = require('electron-is');
const isDev = require('electron-is-dev');

global.plug = {
    // is
    isMain: is.main(),
    isRenderer: is.renderer(),
    isMacOS: is.macOS(),
    isWindows: is.windows(),
    isLinux: is.linux(),
    isX86: is.x86(),
    isX64: is.x64(),
    isProduction: !isDev,
    isDev: isDev,
    isSandbox: is.sandbox(),
    isMas: is.mas(),
    isWindowsStore: is.windowsStore(),
    isRelease: is.release,
    isGtRelease: is.gtRelease,
    isLtRelease: is.ltRelease,

    // pubsub
    subscribe: pubsub.subscribe,
    once: pubsub.once,
    publish: pubsub.publish,
    unsubscribe: pubsub.unsubscribe,
}

if (is.main()) {
    pubsub.init();
}


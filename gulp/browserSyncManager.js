var browserSync = require('browser-sync');

var bsyncHandle = null;

module.exports = {
    closeServer: closeServer,
    reloadServer: reloadServer,
    streamToServer: streamToServer,
    startServer: startServer,
    getBSyncHandle: getBSyncHandle
};

function getBSyncHandle() {
    return bsyncHandle;
}

function initBSyncHandle(label) {
    return bsyncHandle = ((label ? browserSync.create(label) : browserSync.create()));
}

function closeServer(label) {
   browserSync.get(label).exit();
}

function reloadServer(label) {
    return browserSync.get('production').reload();
}

function streamToServer() {
    return browserSync.get('production').stream();
}

function startServer(args) {
    var label = args.label;
    var port = args.port;
    var baseDir = args.baseDir;
    var middleware = args.middleware;
    var open = args.open || false;  // Callee, '08-servers.js' does not set this to a value so expect it to be undefined

    initBSyncHandle(label);
    var conf = {
        port: port,
        server: {
            baseDir: baseDir
        },
        open:open
    };
    if(middleware) {
        conf.middleware = args.middleware;
    }
    bsyncHandle.init(conf);

}
module.exports = require('bem-node');

var cwd = process.cwd();

module.exports.getConfig = function() {

    return {
        bundleBuildLevels: [
            cwd + '/node_modules/bem-node/node_modules/bem-bl/blocks-common',
            cwd + '/node_modules/bem-node/node_modules/bem-bl/blocks-desktop',
            cwd + '/node_modules/bem-node/node_modules/bem-json',
            cwd + '/node_modules/bem-node/blocks',
            cwd + '/node_modules/bem-components/common.blocks',
            cwd + '/node_modules/bem-components/desktop.blocks',
            cwd + '/node_modules/islands-components/common.blocks',
            cwd + '/node_modules/islands-components/desktop.blocks',
            cwd + '/node_modules/islands-page/common.blocks',
            cwd + '/node_modules/islands-page/desktop.blocks',
            cwd + '/blocks'
        ]
    };

};



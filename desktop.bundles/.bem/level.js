var BEM = require('bem');

exports.baseLevelPath = require.resolve('../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../.bem/bem-bl/blocks-common',
            '../../.bem/bem-bl/blocks-desktop',
            '../../.bem/bemhtml/common.blocks',
            '../../desktop.blocks'
        ])
    });

};

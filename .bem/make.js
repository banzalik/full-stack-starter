/*global MAKE:true */

"use strict";

//process.env.YENV = 'production';

MAKE.decl('Arch', {

    getLibraries: function() {

        return {
            '.bem/libs/bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.3'
            },
            '.bem/libs/bemhtml' : {
                type: 'git',
                url: 'git://github.com/bem/bemhtml.git'
            }
        };

    }

});

MAKE.decl('BundleNode', {

    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'js',
            'css',
            'ie.css',
            'ie6.css',
            'ie7.css',
            'ie8.css',
            'ie9.css',
            'html'
        ];
    }

});

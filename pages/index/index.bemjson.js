({
    block: 'b-page',
    title: 'index',
    head: [
        { elem: 'css', url: '_index.css', ie: false},
        { elem: 'css', url: '_index.ie.css', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_index.js'},
    ],
    content: [{
        block: 'b-test',
        content: 'Я блок b-test'
    },{
        block: 'b-test',
        mods: { color: 'green' },
        content: 'Я блок b-test, с модификатором color=green'
    },{
        block: 'b-test',
        content: {
            elem: 'element',
            content: 'Я элемент element блока b-test'
        }
    },{
        block: 'b-test',
        content: {
            elem: 'element',
            elemMods: { color: 'olive' },
            content: 'Я элемент блока b-test с модификатором color=olive'
        }
    },{
        block: 'b-test',
        content: [ 'Я текст внутри b-test ',
        {
            elem: 'element',
            elemMods: { color: 'olive' },
            content: 'Я элемент блока b-test с модификатором color=olive'
        }]
    },{
        block: 'b-test',
        elem: 'img'
    }]
})
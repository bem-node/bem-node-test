BEM.JSON.decl('gframe', {
    onElem: {
        image: function (ctx) {

        }
    },
    onBlock: function(ctx) {
        ctx.js(true).content([
            {
                elem: 'portfolio',
                mix: [{block: 'island'}],
                mods: {visibility: 'hidden'}
            },
            {
                block: 'button',
                mods: {theme: 'normal', size: 'm'},
                content: 'load portfolio'
            }
        ]);
    }
});

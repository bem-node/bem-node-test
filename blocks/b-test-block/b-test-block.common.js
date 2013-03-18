BEM.JSON.decl('b-test-block', {

    onBlock: function(ctx) {
        var id = ctx.param('id'),
            links = [],
            i;
        
        for (i = 1; i <= 10; i++) {
            if (i !== id) {
                links.push({
                    block: 'b-link',
                    url: '/test/' + i,
                    content: i
                });
            }
        }

        ctx.content([
            {elem: 'title', content: 'current: ' + id },
            {elem: 'links', content: links}
        ]);
    }

});


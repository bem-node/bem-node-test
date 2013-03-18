BEM.blocks['i-router'].define(/^\/test(?:\/(\d+))$/, 'i-page-test');
BEM.decl({block: 'i-page-test', baseBlock: 'i-page'}, null, {

    init: function (matchers) {
        return this.out({
            block: 'b-test-block',
            id: Number(matchers[1])
        });
    }

});

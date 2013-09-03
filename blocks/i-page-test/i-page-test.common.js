BEM.blocks['i-router'].define(/^\/?$/, 'i-page-test');

BEM.decl({block: 'i-page-test', baseBlock: 'i-page' }, null, {

    init: function (matchers) {
        return this.out({
            block: 'gframe'
        });
    }

});

BEM.DOM.decl('gframe', {

    _imageHost : 'http://portfolio.copia.org.ua/',

    _descriptionUri : 'images/projects/descriptor.json',

    onSetMod : {
        js : function() {
            var promise = BEM.blocks['i-api-request'].get(this._imageHost + this._descriptionUri);

            promise.then(function (val) {
                var portfolioElem = this.elem('portfolio');

                this.setMod(portfolioElem, 'visibility', 'visible');

                portfolioElem.html(BEM.blocks['i-content'].html(
                        this._generateProjectTemplate(val[Object.keys(val)[1]]), true));

            }.bind(this)).done();
        }
    },

    _generateProjectTemplate : function(project) {
        var projectTemplate = {
            block: 'gframe',
            elem: 'project',
            content: []
        };

        var blockImages = [];
        for (var i = 0; i < project.images.length; i++) {
            blockImages.push({
                elem: 'image',
                src: this._imageHost + project.images[i]
            });
        }

        projectTemplate.content.push(blockImages);
        projectTemplate.content.push({
            block: 'gframe',
            elem: 'description',
            tag: 'span',
            content: 'about - ' + project.description.about + ' state - ' + project.description.state
        });

        return projectTemplate;
    }

}, {
    live: function() {
        this.liveInitOnBlockInsideEvent('click', 'button');
     }
});
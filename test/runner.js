/*global PIXI, sinon, mocha, describe, it, expect*/

describe('pixi-touch suite', function() {
    describe('pixi-backbone-events', function() {
        it('should support generic event binding', function() {
            var callback = sinon.spy();

            var displayObject = new PIXI.DisplayObject();
            displayObject.on('some_event', callback);

            // triger event
            displayObject.trigger('some_event');
            expect(callback.calledOnce).to.be(true);

            // trigger a second time
            displayObject.trigger('some_event');
            expect(callback.calledTwice).to.be(true);

            // turn event off and attempt to trigger
            displayObject.off('some_event');
            displayObject.trigger('some_event');
            expect(callback.calledTwice).to.be(true);
        });
    });

    describe('pixi-touch', function() {

        // stage
        var pxRatio = window.devicePixelRatio || 1;
        var stage = new PIXI.Stage(0xdddddd, true);
        var renderer = PIXI.autoDetectRenderer(window.innerWidth*pxRatio, window.innerHeight*pxRatio);
        renderer.view.setAttribute('style', 'width: ' + window.innerWidth +'px; height: ' + window.innerHeight + 'px;');
        stage.interactive = true;
        document.body.appendChild(renderer.view);

        var texture = PIXI.Texture.fromImage('data:image/gif;base64,R0lGODlhAQABAPAAAP8REf///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==');
        var sprite = window.sprite = new PIXI.Sprite(texture);
        sprite.anchor = {x: 0.5, y: 0.5};
        sprite.position = {x: 100, y: 100};
        sprite.width = 100;
        sprite.height = 100;
        stage.addChild(sprite);
        sprite.interactive = true;
        sprite.tap = function() { console.log('test'); };
        renderer.render(stage);

        var animate = function() {
            renderer.render(stage);
            sprite.rotation += 0.01;
            requestAnimationFrame(animate);
        };

        animate();
    });
});

mocha.run();

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
});

mocha.run();

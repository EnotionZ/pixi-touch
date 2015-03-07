/*global PIXI*/

(function() {

    PIXI.DisplayObject.prototype.tap = function(e) {
        this.trigger('tap', e);
    };

    PIXI.DisplayObject.prototype.touchstart = function(e) {
        this.trigger('touchstart', e);
    };

    PIXI.DisplayObject.prototype.touchmove = function(e) {
        this.trigger('touchmove', e);
    };

    PIXI.DisplayObject.prototype.touchend = function(e) {
        this.trigger('touchend', e);
    };

}).call(this);

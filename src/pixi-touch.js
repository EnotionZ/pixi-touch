/*global PIXI*/
'use strict';

(function() {

    function _gestureStart(e) {
        //console.log('gesture start', e.target);
    }

    function _gestureMove(e) {
        //console.log('gesture move', e.target);
    }

    function _gestureEnd(e) {
        //console.log('gesture end', e.target);
    }


    var proto = PIXI.DisplayObject.prototype;

    proto.tap = function(e) {
        this.trigger('tap', e);
    };

    proto.click = function(e) {
        this.trigger('click', e);
    };

    proto.touchstart = function(e) {
        _gestureStart.call(this, e);
        this.trigger('touchstart', e);
    };

    proto.touchmove = function(e) {
        _gestureMove.call(this, e);
        this.trigger('touchmove', e);
    };

    proto.touchend = function(e) {
        _gestureEnd.call(this, e);
        this.trigger('touchend', e);
    };


    proto.mousedown = function(e) {
        _gestureStart.call(this, e);
        this.trigger('mousedown', e);
    };

    proto.mousemove = function(e) {
        _gestureMove.call(this, e);
        this.trigger('mousemove', e);
    };

    proto.mouseup = function(e) {
        _gestureEnd.call(this, e);
        this.trigger('mouseup', e);
    };
})();

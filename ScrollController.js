/*!
 *
 * Window scroll event controller
 *
 * @ScrollController
 * @author: kitajchuk
 *
 *
 */
(function ( factory ) {

    if ( typeof exports === "object" && typeof module !== "undefined" ) {
        module.exports = factory();

    } else if ( typeof window !== "undefined" ) {
        window.ScrollController = factory();
    }

})(function () {

    var Controller = require( "properjs-controller" );

    /**
     *
     * Window scroll event controller
     * @constructor ScrollController
     * @augments Controller
     * @requires Controller
     * @memberof! <global>
     *
     * @fires scroll
     * @fires scrolldown
     * @fires scrollup
     * @fires scrollmax
     * @fires scrollmin
     *
     */
    var ScrollController = function ( element ) {
        Controller.call( this );

        this.element = (element || window);
        this.current = null;
        this.isWindow = (this.element === window);

        this.start();
    };

    ScrollController.prototype = Object.create( Controller.prototype );

    /**
     *
     * Starts the request animation frame cycle
     * @memberof ScrollController
     * @method start
     *
     */
    ScrollController.prototype.start = function () {
        var self = this;

        // Call on parent cycle
        this.go(function () {
            var current = self.getScrollY(),
                isStill = (current === self.current),
                isScroll = (current !== self.current),
                isScrollUp = (current < self.current),
                isScrollDown = (current > self.current),
                isScrollMax = (current !== self.current && self.isScrollMax()),
                isScrollMin = (current !== self.current && self.isScrollMin());

            // Fire blanket scroll event
            if ( isScroll ) {
                /**
                 *
                 * @event scroll
                 *
                 */
                self.fire( "scroll" );
            }

            // Fire scrollup and scrolldown
            if ( isScrollDown ) {
                /**
                 *
                 * @event scrolldown
                 *
                 */
                self.fire( "scrolldown" );

            } else if ( isScrollUp ) {
                /**
                 *
                 * @event scrollup
                 *
                 */
                self.fire( "scrollup" );
            }

            // Fire scrollmax and scrollmin
            if ( isScrollMax ) {
                /**
                 *
                 * @event scrollmax
                 *
                 */
                self.fire( "scrollmax" );

            } else if ( isScrollMin ) {
                /**
                 *
                 * @event scrollmin
                 *
                 */
                self.fire( "scrollmin" );
            }

            self.current = current;
        });
    };

    /**
     *
     * Stops the request animation frame cycle
     * @memberof ScrollController
     * @method destroy
     *
     */
    ScrollController.prototype.destroy = function () {
        this.stop();
    };

    /**
     *
     * Returns the current window vertical scroll position
     * @memberof ScrollController
     * @method getScrollY
     * @returns number
     *
     */
    ScrollController.prototype.getScrollY = function () {
        return (this.isWindow ? window.scrollY : this.element.scrollTop);
    };

    /**
     *
     * Get the max document scrollable height
     * @memberof ScrollController
     * @method getScrollMax
     * @returns number
     *
     */
    ScrollController.prototype.getScrollMax = function () {
        var max = null;

        if ( this.isWindow ) {
            max = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.documentElement.clientHeight
            );

        } else {
            max = Math.max(
                this.element.scrollHeight,
                this.element.offsetHeight,
                this.element.clientHeight
            );
        }

        return (max - window.innerHeight);
    };

    /**
     *
     * Determines if scroll position is at maximum for document
     * @memberof ScrollController
     * @method isScrollMax
     * @returns boolean
     *
     */
    ScrollController.prototype.isScrollMax = function () {
        return (this.getScrollY() >= this.getScrollMax());
    };

    /**
     *
     * Determines if scroll position is at minimum for document
     * @memberof ScrollController
     * @method isScrollMin
     * @returns boolean
     *
     */
    ScrollController.prototype.isScrollMin = function () {
        return (this.getScrollY() <= 0);
    };


    return ScrollController;

});

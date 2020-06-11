import Controller from "properjs-controller";



export default class ScrollController extends Controller {
    constructor ( element ) {
        super();

        this.current = null;
        this.element = (element || window);
        this.isWindow = (this.element === window);

        this.start();
    }


    getScrollY () {
        return (this.isWindow ? window.scrollY : this.element.scrollTop);
    }


    getScrollMax () {
        let max = null;

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
    }


    isScrollMax () {
        return (this.getScrollY() >= this.getScrollMax());
    }


    isScrollMin () {
        return (this.getScrollY() <= 0);
    }


    start () {
        this.go(() => {
            const current = this.getScrollY();
            const isStill = (current === this.current);
            const isScroll = (current !== this.current);
            const isScrollUp = (current < this.current);
            const isScrollDown = (current > this.current);
            const isScrollMax = (current !== this.current && this.isScrollMax());
            const isScrollMin = (current !== this.current && this.isScrollMin());

            // Fire blanket scroll event
            if ( isStill ) {
                this.fire( "idle", current );

            } else if ( isScroll ) {
                this.fire( "scroll", current );
            }

            // Fire scrollup and scrolldown
            if ( isScrollDown ) {
                this.fire( "scrolldown", current );

            } else if ( isScrollUp ) {
                this.fire( "scrollup", current );
            }

            // Fire scrollmax and scrollmin
            if ( isScrollMax ) {
                this.fire( "scrollmax", current );

            } else if ( isScrollMin ) {
                this.fire( "scrollmin", current );
            }

            this.current = current;
        });
    }
}

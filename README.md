ProperJS // ScrollController
============================

> Overkill scroll handling for professionals.



## Installation

```shell
npm i properjs-scrollcontroller --save-dev
```



## Usage
ScrollController doesn't use any native window or document event binding for scroll handling. Rather, it uses requestAnimationFrame and supplies extra nifty scroll events for more control.
```javascript
import ScrollController from "properjs-scrollcontroller";

// Window scroll handling (RAF)
const winScroll = new ScrollController();

winScroll.on( "idle", ( scrollY ) => {
    console.log( "window idle", scrollY );
});

winScroll.on( "scroll", ( scrollY ) => {
    console.log( "window scroll", scrollY );
});

winScroll.on( "scrolldown", ( scrollY ) => {
    console.log( "window scrolldown", scrollY );
});

winScroll.on( "scrollup", ( scrollY ) => {
    console.log( "window scrollup", scrollY );
});

winScroll.on( "scrollmin", ( scrollY ) => {
    console.log( "window scrollmin", scrollY );
});

winScroll.on( "scrollmax", ( scrollY ) => {
    console.log( "window scrollmax", scrollY );
});

// Inline element scroll handling (RAF)
const divScroll = new ScrollController( document.getElementById( "test" ) );

// All the same evens apply for inline elements as document (window) scroll
divScroll.on( "scroll", ( scrollY ) => {
    console.log( "div scroll", scrollY );
});
```

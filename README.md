ScrollController
================

> Scroll handling controller using request animation frame.



## Installation

```shell
npm install properjs-scrollcontroller --save-dev
```


## Usage
```javascript
var ScrollController = require( "properjs-scrollcontroller" ),
    // Default is Window
    scroller = new ScrollController();

// Bind event
scroller.on( "scroll", function () {
    // Handle event here
});

// You can pass an element
scroller = new ScrollController( element );
```



## Events
- scroll
- scrolldown
- scrollup
- scrollmax
- scrollmin



## Methods
- on()
- getScrollY()
- getScrollMax()
- isScrollMax()
- isScrollMin()

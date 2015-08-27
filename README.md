ScrollController
================

> Window scroll event controller using request animation frame.



## Installation

```shell
npm install properjs-scrollcontroller --save-dev
```


## Usage
```javascript
var ScrollController = require( "properjs-scrollcontroller" ),
    scroller = new ScrollController();

// Bind event
scroller.on( "scroll", function () {
    // Handle event here
});
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
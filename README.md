ScrollController
================

> Window scroll event controller using request animation frame.



## Installation

```shell
npm install properjs-scrollcontroller
```


## Usage
```javascript
var scroller = new ScrollController();

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
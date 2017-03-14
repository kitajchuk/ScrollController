var ScrollController = require( "ScrollController" );

// Test with Window
var test1 = new ScrollController();
    test1.on( "scroll", function () {
        console.log( "test 1" );
    });

// Test with element
var test2 = new ScrollController( document.getElementById( "test" ) );
    test2.on( "scroll", function () {
        console.log( "test 2" );
    });

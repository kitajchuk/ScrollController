import ScrollController from "../ScrollController";

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

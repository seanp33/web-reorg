require(['simple/suite1', 'simple/suite2', 'requirejs/domReady'], function(suite1, suite2, domReady) {
    domReady(function(){
        suite1.run();
        suite2.run();
    })
});
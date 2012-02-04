require(['simple/app', 'requirejs/domReady'], function(app, domReady) {
    domReady(function(){
        document.write(app.run(100));
    })
});
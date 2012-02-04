require(['simple/app', 'requirejs/domReady'], function(app, domReady) {
    domReady(function(){
        app.run(100);

        var beans = app.generateBeans(10);

        console.log(beans.length +  ' beans generated');
        for(var i=0;i<beans.length;i++){
            console.log(beans[i].toString());
        }
    })
});
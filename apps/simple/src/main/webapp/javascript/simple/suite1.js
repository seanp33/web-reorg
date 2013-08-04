define(['handlebars/Handlebars'],function(Handlebars) {

        var TEMPLATE = "<script id='assert-me-template' type='text/x-handlebars-template'><div id='{{idA}}'><div id='{{idB}}'>idA</div><div id='{{idC}}'>idB</div></div></script>";
        return {
            run:function(){

                $('body').append(TEMPLATE);
                test('Handlebars', function(){

                    notEqual(undefined, Handlebars, 'Handlebars loaded via AMD');

                    var source   = $("#assert-me-template").html();
                    var template = Handlebars.compile(source);
                    ok((typeof template) == 'function', 'template compiled successfully');
                    var context = {idA: 'theIdA', idB: 'theIdB', idC: 'theIdC'}
                    $('body').append(template(context));

                    ok($('#theIdA').length, 'test element appended via template');
                    ok($('#theIdB').length, 'template hydrated');
                    ok($('#theIdC').length, 'template hydrated');
                    $('#theIdA').remove();
                    $('#assert-me-template').remove();
                });
            }
        }
    }
);
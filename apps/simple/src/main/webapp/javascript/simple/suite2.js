define([],function() {
        return {
            run:function(){
                test('test A', function(){
                    ok('A' == 'A', "A equals A");
                });

                test('test B', function(){
                    ok('B' == 'B', "B equals B");
                });
            }
        }
    }
);
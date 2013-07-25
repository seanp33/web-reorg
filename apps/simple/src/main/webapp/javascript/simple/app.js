define("simple/app", ['reorg/common/utilPlus', 'reorg/common/util', 'reorg/common/Bean'],
    function(utilPlus, util, Bean) {
        return {
            run:function(count) {
                var msg = 'generating ' + count + ' random numbers...\n';
                var randNumbers = utilPlus.randRanges(0, 100, count);
                for (var i = 0; i < randNumbers.length; i++) {
                    msg += ((i+1) + '. ' + randNumbers[i]) + '\n';
                }
                msg += '...thanks require.js...\n';

                console.log(msg);
                return msg;
            },

            generateBeans:function(count){
                var types = ['type A', 'type B', 'type C', 'type D', 'type E'];
                var beans = [];
                for(var i=0;i<count;i++){
                    var bean = new Bean(i, types[util.randRange(1, types.length-1)]);
                    var randProps = util.randRange(1, 10);
                    for(var j=0;j<randProps;j++){
                        bean.add('prop' + j, util.randRange(1, 100));
                    }

                    beans.push(bean);
                }

                return beans;
            }
        }
    }
);
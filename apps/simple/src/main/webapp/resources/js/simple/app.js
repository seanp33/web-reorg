define("simple/app", ['reorg/common/utilPlus'], function(utilPlus) {
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
            }
        }
    }
);
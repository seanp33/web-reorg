define("reorg/common/utilPlus", ['reorg/common/util'],
    function(util) {
        return {
            randRanges:function(min, max, count) {
                var ranges = [];
                for(var i=0;i<count;i++){
                    ranges.push(util.randRange(min, max));
                }
                return ranges;
            }
        }
    }
);
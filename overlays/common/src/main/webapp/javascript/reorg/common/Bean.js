define("reorg/common/Bean", [],function(){

    function Bean(id, type){
        this.id = id;
        this.type = type;
    }

    Bean.prototype.add = function (name, value){
        this[name] = value;
    }

    Bean.prototype.toString = function(){
        var str = "";
        for(var p in this){
            if(this.hasOwnProperty(p)){
                str += p + ":" + this[p] + "; ";
            }
        }

        return str;
    }

    return Bean;
});
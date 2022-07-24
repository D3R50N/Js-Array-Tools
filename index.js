
class jat {
    constructor(array = []) {
        this.array = array;
    }
}

function valObj(key, value, arr = []) {
    return {
        key: key,
        value: value,
        array: arr,
    };
}


jat.prototype.isEmpty = function isEmpty(array = this.array) {
    return array.length == 0;
}

jat.prototype.lastKey = function lastKey(array = this.array) {
    return array.length - 1;
}
jat.prototype.find = function find(value, array = this.array) {
    var out = [];
    array.forEach((val, key) => {
        if (val != value)
            return;

        var obj = valObj(key, value, array);
        out.push(obj.key);
    });
    return out;
}

jat.prototype.findFirst = function findFirst(value, array = this.array) {
    return this.find(value, array)[0] ? this.find(value, array)[0] : -1;
}
jat.prototype.findLast = function findLast(value, array = this.array) {
    return this.find(value, array)[this.lastKey(array)] ? this.find(value, array)[0] : -1;
}
jat.prototype.isIn = function isIn(value, array = this.array) {
    return !this.isEmpty(this.find(value, array));
}



function newJat(array=[]){
    return new jat(array);
}

module.exports = newJat;
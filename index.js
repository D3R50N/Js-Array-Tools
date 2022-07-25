function func(value, array = this.array) {
}
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


function isEmpty(array = this.array) {
    return array.length == 0;
}

function lastKey(array = this.array) {
    return array.length - 1;
}
function find(value, array = this.array) {
    var out = [];
    array.forEach((val, key) => {
        if (val != value)
            return;

        var obj = valObj(key, value, array);
        out.push(obj.key);
    });
    return out;
}

function findFirst(value, array = this.array) {
    return this.find(value, array)[0] ? this.find(value, array)[0] : -1;
}
function findLast(value, array = this.array) {
    return this.find(value, array)[this.lastKey(array)] ? this.find(value, array)[0] : -1;
}
function isIn(value, array = this.array) {
    return !this.isEmpty(this.find(value, array));
}

function add(value, array = this.array) {

}






jat.prototype.isEmpty = isEmpty;
jat.prototype.lastKey = lastKey;
jat.prototype.find = find;
jat.prototype.findFirst = findFirst;
jat.prototype.findLast = findLast;
jat.prototype.isIn = isIn;


function newJat(array = []) {
    return new jat(array);
}

module.exports = newJat;

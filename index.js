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
    return find(value, array)[0] ? find(value, array)[0] : -1;
}
function findLast(value, array = this.array) {
    return find(value, array)[lastKey(array)] ? find(value, array)[0] : -1;
}

function isIn(value, array = this.array) {
    return !isEmpty(find(value, array));
}



function add(value, index = lastKey(this.array) + 1, array = this.array,) {
    let firstPart = array.slice(0, index);
    let secondPart = array.slice(index, lastKey(array) + 1);
    let middle = [value];
    array = firstPart.concat(middle).concat(secondPart);
    return array;
}

function prepend(value, array = this.array) {
    array=add(value, 0, array);
    return array;
}



jat.prototype.isEmpty = isEmpty;
jat.prototype.lastKey = lastKey;
jat.prototype.find = find;
jat.prototype.findFirst = findFirst;
jat.prototype.findLast = findLast;
jat.prototype.isIn = isIn;
jat.prototype.add = add;
jat.prototype.prepend = prepend;


function newJat(array = []) {
    return new jat(array);
}

module.exports = newJat;

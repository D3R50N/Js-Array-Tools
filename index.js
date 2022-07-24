function valObj(key, value, arr = []) {
    return {
        key: key,
        value: value,
        array: arr,
    };
}

function isEmpty(array = []) {
    return array.length == 0;
}

function find(value, array = []) {
    var out = [];
    array.forEach((val, key) => {
        if (val != value)
            return;

        var obj = valObj(key, value, array);
        out.push(obj.key);
    });
    return out;
}

function findFirst(value, array = []) {

    return find(value, array)[0];
}





function jat() {
    this.isEmpty = isEmpty;
    this.find = find;
}
let array = [2, 3, 4, 3, 4, 3, 5];
let j = new jat();
console.log('====================================');
console.log(j.findFirst(3, array));
console.log('====================================');



module.exports = jat;
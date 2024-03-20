// use a JavaScript Object method to create an array that contains the object's values. You then only need to write code that processes an array, regardless of what data structure is passed in to your function. Use your Googling skills to figure out how to do this.

function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (let key in collection) {
            callback(collection[key]);
        }
    }
    
    return collection;
}

function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            result.push(callback(collection[key], key, collection));
        }
    }
    return result;
}

function myReduce(collection, callback, acc) {
    let accumulator = acc !== undefined ? acc : Object.values(collection)[0];
    let start = acc !== undefined ? 0 : 1;

    if (Array.isArray(collection)) {
        for (let i = start; i < collection.length; i++) {
            accumulator = callback(accumulator, collection[i], collection);
        }
    } else {
        let keys = Object.keys(collection);
        for (let i = start; i < keys.length; i++) {
            accumulator = callback(accumulator, collection[keys[i]], collection);
        }
    }

    return accumulator;
}

function myFind(collection, predicate) {
    for (let key in collection) {
        if (predicate(collection[key])) {
            return collection[key];
        }
    }
}

function myFilter(collection, predicate) {
    let result = [];
    for (let key in collection) {
        if (predicate(collection[key])) {
            result.push(collection[key]);
        }
    }
    return result;
}

function mySize(collection) {
    return Object.keys(collection).length;
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(Math.max(array.length - n, 0));
    }
}

function myKeys(obj) {
    let keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

function myValues(obj) {
    let values = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }
    return values;
}

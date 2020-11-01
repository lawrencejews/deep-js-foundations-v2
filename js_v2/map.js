// Underscore map
_.map = function (list, callback) {
    var storage = [];
    // for (var i = 0; i < list.length; i++){
    //     storage.push(callback(list[i], i, list))
    // }
    _.each(list, function (v, i, list) {
        storage.push(callback(v, i, list))
    })
    return storage;
}

_.map([1, 2, 3], function (val) {
    return val + 1;
})


const _ = {}

_.each = function (list, callback) {
    if (Array.isArray(list)) {
        //loop through array
        for (var i = 0; i < list.length; i++) {
            // call the callback with a list item
            callback(list[i], i, list); // value, index and list.
        }
    } else {
        for (var key in list) {
            callback(list[key], key, list)
        }
    }
}

//Underscore each from Underscorejs library
_.each(['sally', 'lawrence', 'lubwama'], function (name, i, list) {
    if (list[i + 1]) {
        console.log(name, 'is younger than', list[i + 1])
    } else {
        console.log(name, 'is the oldest')
    }
})
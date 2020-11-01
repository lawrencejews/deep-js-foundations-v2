const _ = {};

_.filter = function (arr, cb) {
    const storage = [];

    // for (let i = 0; i < arr.length; i++){
    //     if (cb(arr[i], i, arr) === true){
    //         storage.push(arr[i])
    //     }
    _.each(arr, function (item, i, list) {
        if (cb(item, i, list) === true) {
            storage.push(item);
        }
    });

    return storage;
}

const videoData = [{
        name: 'Miss Scarlet',
        present: true,
        rooms: [{
                kitchen: false
            },
            {
                ballroom: false
            },
            {
                conservatory: false
            },
            {
                'dining room': false
            },
            {
                'billiard room': false
            },
            {
                library: false
            }
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [{
                kitchen: false
            },
            {
                ballroom: false
            },
            {
                conservatory: false
            },
            {
                'dining room': false
            },
            {
                'billiard room': false
            },
            {
                library: false
            }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [{
                kitchen: false
            },
            {
                ballroom: false
            },
            {
                conservatory: false
            },
            {
                'dining room': false
            },
            {
                'billiard room': false
            },
            {
                library: false
            }
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [{
                kitchen: false
            },
            {
                ballroom: false
            },
            {
                conservatory: false
            },
            {
                'dining room': false
            },
            {
                'billiard room': false
            },
            {
                library: false
            }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [{
                kitchen: false
            },
            {
                ballroom: false
            },
            {
                conservatory: false
            },
            {
                'dining room': false
            },
            {
                'billiard room': false
            },
            {
                library: false
            }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [{
                kitchen: false
            },
            {
                ballroom: false
            },
            {
                conservatory: false
            },
            {
                'dining room': false
            },
            {
                'billiard room': false
            },
            {
                library: false
            }
        ]
    }
];

const suspects = _.filter(videoData, function(suspectObject){
    return suspectObject.present;
});

const suspectsNames = _.map(suspects, suspect  =>{
    return suspect.name;
})


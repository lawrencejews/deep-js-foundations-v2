//Create an object using bracket and dot notation that 
//represents the characters and related data you may find in a game of Clue
var suspects = [{
        name: 'Rusty',
        color: 'orange'
    },
    {
        name: 'Miss Scarlet',
        color: 'red'
    }
]

var [{color: firstColor}, {color: secondColor}] = suspects

const game = {
    'suspects':[
        {
            name: 'Rusty',
            color: 'orange'
        },
        {
            name: 'Miss Scarlet',
            color: 'red'
        }
    ]
}

var gameLoop = function(){
    for(var i = 0; i < game.suspects.length; i++){
        console.log('outer loop')
        for(var key in game.suspects[i]){
            console.log('inner loop')
            if(game.suspects[i][key] === 'Rusty'){
                console.log('Found em')
            }else{
                console.log('next time!');
            }
        }
    }
}
gameLoop()

function foo(){
    for(let i = 0; i < game.suspects.length; i++){ // Option 1
        console.log(game.suspects[i]);
    }
}

// for(let key in obj){
//     obj[key]
// }

foo()

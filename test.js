
var array = [34, 15, 88, -2];

function show(args){
    var min = args[0];
    args.forEach(function(value) {
        if(value < min) {
            min = value;
        }
    })
    return min;
}

console.log(show(array));
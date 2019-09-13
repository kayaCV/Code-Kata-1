// By Jane

let box1 = $('#first-string');
let box2 = $('#second-string');

$('form').submit(function(e) {
    if (box1.val().toLowerCase() === box2.val().toLowerCase() ) {
        alert("It's a match")
    } else {
        alert ("No Match")
    }

})


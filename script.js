const box1 = document.getElementById('first-string');
const box2 = document.getElementById('second-string');
const button = document.getElementById('compare-btn');

let box1Value;
let box2Value ;

button.addEventListener('click', () => {
    box1Value = box1.value;
    box2Value = box2.value;

    if(box1Value.toLowerCase() === box2Value.toLowerCase()) {
        alert('Same!!');
    } else {
        alert('not same!!');
    }
});


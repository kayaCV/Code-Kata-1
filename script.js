//by Carla

const box1 = document.getElementById('first-string');
const box2 = document.getElementById('second-string');
const button = document.getElementById('compare-btn');

button.addEventListener('click', (e) => {
    let box1Value = box1.value;
    let box2Value = box2.value;

    if(box1Value.toLowerCase() === box2Value.toLowerCase()) {
        alert('Same string!!');
    } else {
        alert('NOOOOOOO!!');
    }
});
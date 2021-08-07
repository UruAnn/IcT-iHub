const increaseBtn = document.querySelector('#increase');
const increaseBtn = document.querySelector('#decrease');
const increaseBtn = document.querySelector('#reset');

let count = 0;

document.getElementById('num').innerHTML =count;

increaseBtn.addEventListener('click', function () {
    count++;
    document.getElementById('num').innerHTML = count;
    if (count > 0) {
        document.getElementById('num').style.color = green;
    } else if (count === 0){
        document.getElementById('num').style.color = 'black';
    } else {
        document.getElementById('num').style.color = 'red';
    }
});


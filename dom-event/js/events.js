function redBg() {
    document.body.style.backgroundColor = 'red';
}


// handle blue button onclick
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
const yellow = document.getElementById('yellow-button');
yellow.onclick = makeYellow;





//greenbutton using anonymus function
const green = document.getElementById('green-button');
//anonymus fucntion
green.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//golden rod using eventlistener

function goldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}
const golden = document.getElementById('golden-rod');
golden.addEventListener('click', goldenRod);


//
const hotpink = document.getElementById('hot-pink');
hotpink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink';
})


//
document.getElementById('light-blue').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
})
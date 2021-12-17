function createNewBox(container) {
    const square = document.createElement('div');
    square.className = 'box';
    square.addEventListener ('click', function(){
        square.classList.toggle('azure');
    })
    container.append(square);
}


function createContainer(numMax){
    for (i=1; i <= numMax; i++){
        createNewBox(containerElement);
    }
};

function hideElement(element1, element2, element3){
    element1.classList.add('hidden');
    element2.classList.add('hidden');
    element3.classList.add('hidden');
}

const containerElement = document.querySelector('.container-game');
const button1 = document.getElementById('level-1');
const button2 = document.getElementById('level-2');
const button3 = document.getElementById('level-3');

button1.addEventListener ('click', function(){
    hideElement(button1, button2, button3);
    containerElement.classList.toggle('lvl1');
    createContainer(100);
})

button2.addEventListener ('click', function(){
    hideElement(button1, button2, button3);
    containerElement.classList.toggle('lvl2');
    createContainer(81);
})

button3.addEventListener ('click', function(){
    hideElement(button1, button2, button3);
    containerElement.classList.toggle('lvl3');
    createContainer(49);
})
function createNewBox(container) {
    const square = document.createElement('div');
    square.className = 'box';
    square.innerHTML += i;
    square.addEventListener ('click', function(){
        square.classList.add('azure');
    })
    container.append(square);
}

function createContainer(numMax, container){
    container.innerHTML = '';
    for (i=1; i <= numMax; i++){
        createNewBox(container);
    }
};

const containerElement = document.querySelector('.container-game');
const button1 = document.getElementById('level-1');
const button2 = document.getElementById('level-2');
const button3 = document.getElementById('level-3');

button1.addEventListener ('click', function(){
    containerElement.classList.remove('lvl1', 'lvl2', 'lvl3')
    containerElement.classList.toggle('lvl1');
    createContainer(100, containerElement);
})

button2.addEventListener ('click', function(){
    containerElement.classList.remove('lvl1', 'lvl2', 'lvl3')
    containerElement.classList.toggle('lvl2');
    createContainer(81, containerElement);
})

button3.addEventListener ('click', function(){
    containerElement.classList.remove('lvl1', 'lvl2', 'lvl3')
    containerElement.classList.toggle('lvl3');
    createContainer(49, containerElement);
})
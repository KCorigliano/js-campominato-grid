function createNewBox(container) {
    const square = document.createElement('div');
    square.className = 'box';
    square.innerHTML += i
    square.addEventListener ('click', function(){
        square.classList.add('azure');
        square.innerHTML = '';
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

function activeElement(container, element){
    container.style.justifyContent = "center";
    element.classList.add('active');
    element.classList.add('center');
}

const containerElement = document.querySelector('.container-game');
const containerButtonElement = document.querySelector('.container-button');
const button1 = document.getElementById('level-1');
const button2 = document.getElementById('level-2');
const button3 = document.getElementById('level-3');
const refreshButton = document.getElementById('refresh');

button1.addEventListener ('click', function(){
    hideElement(button1, button2, button3);
    activeElement(containerButtonElement, refreshButton);
    containerElement.classList.toggle('lvl1');
    createContainer(100);
})

button2.addEventListener ('click', function(){
    hideElement(button1, button2, button3);
    activeElement(containerButtonElement,refreshButton);
    containerElement.classList.toggle('lvl2');
    createContainer(81);
})

button3.addEventListener ('click', function(){
    hideElement(button1, button2, button3);
    activeElement(containerButtonElement, refreshButton);
    containerElement.classList.toggle('lvl3');
    createContainer(49);
})

refreshButton.addEventListener ('click', function(){
    location.reload();
})
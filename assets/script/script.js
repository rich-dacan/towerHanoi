
// Para esse projeto preciso criar elemento via DOM: torres e discos; OK
// Apenas um disco pode ser movido por vez. (addEventListener) function interceptarEvent()
// Cada movimento consiste de pegar o disco de cima de uma das pilhas e movê-lo para o topo de outra pilha.
// Nenhum disco pode ser colocado no topo de um disco menor.  (Element.clientWidth) 



// CRIANDO TORRES VIA DOM;
const createTowers = () => {
  const tower1 = document.createElement('section');
  tower1.id    = 'tower1';
  const tower2 = document.createElement('section');
  tower2.id    = 'tower2';
  const tower3 = document.createElement('section');
  tower3.id    = 'tower3';

  const towers = document.getElementById('container');

  towers.appendChild(tower1);
  towers.appendChild(tower2);
  towers.appendChild(tower3);
}
createTowers()

// CRIANDO DISCOS VIA DOM DE FORMA DINÂMICA;
function createDisks(currentDiskArr) {
  
  const disk = document.createElement('div');
  disk.id    = currentDiskArr;
  disk.innerText = currentDiskArr;

  const tower = document.getElementById("tower1");
 
  tower.appendChild(disk);
  
}

// TRABALHANDO AS MOVIMENTAÇÕES;
let tower;
let disk = 0;

let towerOrigin;
let towerFinal;

let diskOrigin;
let diskFinal;
let widthDiskOrigin = 0;
let widthDiskFinal  = 0;

// VARIÁVEIS DE CONTROLE;
let clickCounter = 0;
let movCount     = 0;
let elemCount    = 0;

// HANDLER DE CLIQUE EM CADA TORRE, IDENTIFICANDO-A;
function clickTower(event) {
  tower = event.currentTarget;
  clickCounter++;
  // console.log(tower);
  receivingTower();
}

const tower1 = document.getElementById('tower1');
const tower2 = document.getElementById('tower2');
const tower3 = document.getElementById('tower3');

tower1.addEventListener('click', clickTower);
tower2.addEventListener('click', clickTower);
tower3.addEventListener('click', clickTower);

// FUNÇÃO CERNE DAS MOVIMENTAÇÕES DOS DISCOS;
function receivingTower() {
  if (clickCounter % 2 === 1) {
    towerOrigin = tower;
    diskOrigin = towerOrigin.lastElementChild;
    widthDiskOrigin = diskOrigin.clientWidth;

  } else {
      towerFinal = tower;
      if (towerFinal.childElementCount !== 0) {
        diskFinal = towerFinal.lastElementChild;
        widthDiskFinal = diskFinal.clientWidth;
      }
      diskMove();
      checkFinishGame();
  }
  
}
function diskMove () {

  if (widthDiskOrigin < widthDiskFinal || towerFinal.childElementCount === 0) {
    towerFinal.appendChild(diskOrigin);
    elemCount = towerFinal.childElementCount;
    movCount++;
    movCounter.innerHTML= `Movement Counter: ${movCount}`;
 }
}

// CONTADOR DE MOVIMENTOS;
const movCounter = document.getElementById('counterMov');
movCounter.innerText = 'Movement Counter: 0 ';

// NÍVEIS DE DIFICULDADE;

// EASY MODE!
const easyMode = ['disk5', 'disk3', 'disk1']

function modeEasy (){
  resetGame();
  disk = easyMode.length;
  for(let i = 0; i < 3; i++) {

    createDisks(easyMode[i]);
    
  }
}
const easy = document.getElementById('easy');
easy.addEventListener('click', modeEasy);

// MEDIUM MODE!
const mediumMode = ['disk5','disk3', 'disk2', 'disk1']

function modeMedium() {
  resetGame();
  disk = mediumMode.length;
  for(let i = 0; i < 4; i++) {
    createDisks(mediumMode[i]);
  }
}

const medium = document.getElementById('medium');
medium.addEventListener('click', modeMedium);

// HARD MODE!
const hardMode = ['disk5','disk4','disk3', 'disk2', 'disk1'];

function modeHard() {
  resetGame();
  disk = hardMode.length;
  for(let i = 0; i < 5; i++) {
    createDisks(hardMode[i]);
  }
}

const hard = document.getElementById('hard');
hard.addEventListener('click', modeHard);

// FUCKING HARDCORE!
const fuckHard = ['disk7','disk6','disk5','disk4','disk3', 'disk2', 'disk1'];

function modeFuck() {
  resetGame();
  disk = fuckHard.length;
  for(let i = 0; i < 7; i++) {
    createDisks(fuckHard[i]);
    
  }
}

const fuck = document.getElementById('fuck');
fuck.addEventListener('click', modeFuck);


// CONDIÇÃO DE VITÓRIA;

function checkFinishGame() {
  let largerDisk = towerFinal.firstElementChild.clientWidth; 
  let smallDisk = towerFinal.lastElementChild.clientWidth; 
  let lastDisk = towerFinal.firstElementChild.getAttribute('id');
  

  if(elemCount === disk && largerDisk > smallDisk && (lastDisk === 'disk5' || lastDisk === 'disk7') && towerFinal.getAttribute('id') !== 'torre1' ) {
    
    // const main = document.getElementById('container');
    const popUp = document.querySelector('.hidden');

    popUp.classList.add('.popUpVictory');
    popUp.classList.remove('.hidden');


    // const button = document.createElement('button');
    // button.id = 'close';
    // button.innerText = 'X';

    // main.appendChild(popUp);
    // main.appendChild(button);
    closePopUpVictory()
    
  }
  
}

// FECHAR POP-UP;
const closeP = document.getElementById('closePopUp');
closeP.addEventListener('click', closePopUpVictory);

function closePopUpVictory(){
  const popUp = document.querySelector('.hidden');

  // popUp.classList.add('.popUpVictory');
  popUp.classList.remove('.hidden');

}

// RESET GAME;
const reset = document.getElementById('reset');
reset.addEventListener('click', resetGame);

function resetGame (){
  const t1 = document.getElementById('tower1');
  const t2 = document.getElementById('tower2');
  const t3 = document.getElementById('tower3');

  t1.innerText = '';
  t2.innerText = '';
  t3.innerText = '';

  movCount = 0;
  movCounter.innerHTML = 'Contador de Movimento: 0';
  
}


// CRIANDO UM ESCUTADOR DE CLIQUES EM TODO O CONTAINER (ÁREA CLICÁVEL);
// const btnContainer = document.getElementById('container');

// btnContainer.addEventListener('click', () => {
  
//   // let disco = document.getElementById('disk1');
//   // disco.innerText = 'Disk 1';
  
//   // disco.style.lineHeight = '100%'

//   // disco.style.marginBottom = '360px';

// } );

// const diskColor = document.getElementById('nivel-dificuldade');
// diskColor.addEventListener('click', colorsDisks);

// function colorsDisks() {
//   let disk1 = document.getElementById('disk1');
//   disk1.style.background = 'purple';
//   let disk2 = document.getElementById('disk2');
//   disk2.style.background = 'yellow';
//   let disk3 = document.getElementById('disk3');
//   disk3.style.background = 'red';


// }


/*
// Criando elementos HTML via DOM
const createElementsHtml = () => {

  // CRIANDO O CONTAINER PRINCIPAL;
  const main = document.createElement('main');
  main.classList.add('content');

  // CRIANDO O TÍTULO E HEADER;
  const header = document.createElement('header');

  const h1 = document.createElement('h1');
  h1.innerText = 'Torre de Hanoi';

  // CRIANDO UMA SECTION;
  const section = document.createElement('section')


  // CRIANDO AS DIVS QUE ABRIGARÃO CADA TORRE;
  const tower1 = document.createElement('div');
  tower1.id = 'tower1';
  const tower2 = document.createElement('div');
  tower2.id = 'tower2';
  const tower3 = document.createElement('div');
  tower3.id = 'tower3';

  // ANEXANDO OS ELEMENTOS NO PARENT;
  document.body.appendChild(header);
  document.body.appendChild(main);

  header.appendChild(h1)

  main.appendChild(section);

  section.appendChild(tower1);
  section.appendChild(tower2);
  section.appendChild(tower3);
  
  

}
 createElementsHtml()


// CRIANDO OS ELEMENTOS DO JOGO : TORRES E DISCOS;
 

*/
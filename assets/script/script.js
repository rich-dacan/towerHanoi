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
  receivingTower();
}

const tower1 = document.getElementById('tower1');
const tower2 = document.getElementById('tower2');
const tower3 = document.getElementById('tower3');
tower1.addEventListener('click', clickTower);
tower2.addEventListener('click', clickTower);
tower3.addEventListener('click', clickTower);

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
  resetGame ();
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
  resetGame ();
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
  resetGame ();
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
  resetGame ();
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
  let lastDisk = towerFinal.firstElementChild.getAttribute('id')
  
  if(elemCount === disk && largerDisk > smallDisk && (lastDisk === 'disk5' || lastDisk === 'disk7') && towerFinal.getAttribute('id') !== 'torre1' ) {
    
    const main = document.getElementById('container');

    const popUp = document.createElement('div');
    popUp.classList.add('popUpVictory');
    popUp.innerText = 'Congratulations, You Win!'

    main.appendChild(popUp);
    
    setTimeout(()=>{
      popUp.classList.remove("popUpVictory");
      popUp.classList.add('hidden');
      popUp.style.color = ('black')

    },2000)
  }
}
const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGame);

// RESETAR GAME;
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

// Para esse projeto preciso criar elemento via DOM: torres e discos;
// Apenas um disco pode ser movido por vez. (addEventListener) function interceptarEvent()
// Cada movimento consiste de pegar o disco de cima de uma das pilhas e movê-lo para o topo de outra pilha.
// Nenhum disco pode ser colocado no topo de um disco menor.  (Element.clientWidth) 


// CRIANDO TORRES;
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

// CRIANDO DISCOS;
const disks = ["disco5","disco4","disco3", "disco2", "disco1"];

disks.forEach(createDisks);

function createDisks(discoID){

  const disco = document.createElement('div');
  disco.id    = discoID;

  const torre = document.getElementById("tower1");
 
  torre.appendChild(disco);
  
}








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
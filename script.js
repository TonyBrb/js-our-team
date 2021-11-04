const teamMember = [{
  nome : 'Walter Gordon',
  ruolo : 'Office Manager',
  foto : `<img src="img/walter-gordon-office-manager.jpg" alt="Walter Gordon"/>`
},
{
  nome : 'Scott Estrada',
  ruolo : 'Developer',
  foto : `<img src="img/scott-estrada-developer.jpg" alt="Scott Estrada"/>`
},
{
  nome : 'Barbara Ramos',
  ruolo : 'Graphic Designer',
  foto : `<img src="img/barbara-ramos-graphic-designer.jpg" alt="Scott Estrada"/>`
},
{
  nome : 'Angela Lopez',
  ruolo : 'Social Media Manager',
  foto : `<img src="img/angela-lopez-social-media-manager.jpg" alt="Scott Estrada"/>`
},
{
  nome: 'Angela Carrol',
  ruolo: 'Caroll Chief Editor',
  foto:  `<img src="img/angela-caroll-chief-editor.jpg" alt="Scott Estrada"/>`
}
];

console.log(teamMember); 

createTeamCard();

function createTeamCard(){
  for(let key in teamMember){
  const teamCard = document.createElement('div');
  teamCard.className = 'team-card';
  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  cardImage.innerHTML = teamMember[key].foto;
  teamCard.append(cardImage);
  const cardText = document.createElement('div');
  cardText.className = 'card-text';
  teamCard.append(cardText);
  const nome = document.createElement('h3');
  nome.innerHTML = teamMember[key].nome;
  cardText.append(nome);
  const ruolo = document.createElement('p');
  ruolo.innerHTML = teamMember[key].ruolo;
  cardText.append(ruolo);
  document.querySelector('.team-container').append(teamCard);
  }
}
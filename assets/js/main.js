//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
const container = document.querySelector('.container');
const userName = document.querySelector('.card_name');
const userRole = document.querySelector('.card_role');
const userImg = document.querySelector('.card_img');
const membri = [
    { 
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        immagine: '<img src="./assets/img/wayne-barnett-founder-ceo.jpg">'
        },
    { 
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        immagine: '<img src="./assets/img/angela-caroll-chief-editor.jpg">' 
        },
    { 
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        immagine: '<img src="./assets/img/walter-gordon-office-manager.jpg">'
        },  
    { 
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        immagine: '<img src="./assets/img/angela-lopez-social-media-manager.jpg">' 
        },
    { 
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        immagine: '<img src="./assets/img/scott-estrada-developer.jpg">'
        },   
    { 
        nome: 'Barbara Ramos',
        ruolo: 'Grafic designer',
        immagine: '<img src="./assets/img/barbara-ramos-graphic-designer.jpg">'
        },   
]

for(let i = 0; i < membri.length; i++){
    
    container.innerHTML += 
    `<div class="card"> 
    <p class="name">${membri[i].nome}</p>
    <p class="role">${membri[i].ruolo}</p>
    ${membri[i].immagine}
    </div>`
}

    



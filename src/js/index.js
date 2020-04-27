import { linkNames } from './config/linkNames';
import { GenerateDom } from './GenerateDom'
import { CardsContainer } from './CardsContainer';
import { cardsConfig } from './config/cardsConfig';
import { MainContainer } from './MainContainer';
import '../css/style.css';


const app1 = new GenerateDom(linkNames.get('Links'));

document.body.append(app1.app);

let audio =document.createElement('audio');
audio.src= 'src/assets/audio/error.mp3';

document.body.append(audio);

const cardsContainer = new MainContainer(cardsConfig.get("main"));

container.append(cardsContainer.container);

// js execution

let chosenCard = document.body;

document.addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    const rotateCard = event.target.closest('.card')
    rotateCard.classList.toggle('translate');
    chosenCard = rotateCard;
  } else if (event.target.closest('.card')) {
    const audioSrc = event.target.closest('.card').dataset.audioSrc;
    const audio = document.querySelector('audio');
    audio.src = audioSrc;
    audio.play();
  }
});

document.addEventListener('mousemove', () => {
  chosenCard.addEventListener('mouseleave', () => {
    chosenCard.classList.remove('translate');
    chosenCard = document.body;
  })
});

document.addEventListener('click', (event) => {
  if ((event.target.matches('a') || event.target.className.slice(0,4)=='main') && event.target.id!='main') {
    let newCardsContainer = new CardsContainer(cardsConfig.get(event.target.id));
    cardWrapper.replaceWith(newCardsContainer.container);
  } else {
    let newCardsContainer = new MainContainer(cardsConfig.get(event.target.id));
    cardWrapper.replaceWith(newCardsContainer.container);
  }
})


document.addEventListener('click', (event) => {
  const checkbox = document.querySelector('.toggler');
  if(checkbox.checked) { //menu is open now
    if (event.target.matches('.toggler')) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  }
})

document.addEventListener('click', (event) => {
  if(event.target.matches('a')) {
    const links = document.querySelectorAll('a');
    links.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
  }
  if (event.target.className.slice(0,4)=='main') {
    const links = document.querySelectorAll('a');
    links.forEach(item => item.id != event.target.id ? item.classList.remove('active') : item.classList.add('active'));
  }
}) 
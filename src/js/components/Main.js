import {cardContainer, cardCard, cardBody} from '../constants/mainConst';

export class Main {
  constructor(word, img) {
    this.container = document.createElement('a');
    this.container.id = word;
    this.container.className = cardContainer;
    
    this.card = document.createElement('div');
    this.card.id = word;
    this.card.className = cardCard;
    this.container.append(this.card);

    this.imgFront = document.createElement('img');
    this.imgFront.id = word;
    this.imgFront.src = img;
    this.imgFront.className = 'main';
    this.card.append(this.imgFront);

    this.bodyFront = document.createElement('div');
    this.bodyFront.id = word;
    this.bodyFront.className = cardBody;
    this.card.append(this.bodyFront);

    this.section = document.createElement('p');
    this.section.id = word;
    this.section.className = ' ';
    this.section.innerText = word;
    this.section.className = 'main';
    this.bodyFront.append(this.section);
  }
}
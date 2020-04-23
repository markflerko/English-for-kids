import {cardContainer, cardCard, cardBody, cardBtn} from '../constants/constants';

export class Card {
  constructor(word, translation, img, audioSrc) {
    this.container = document.createElement('div');
    this.container.className = cardContainer;
    
    this.card = document.createElement('div');
    this.card.className = cardCard;
    this.card.dataset.audioSrc = audioSrc;
    this.container.append(this.card);

    // front side of card
    this.Front = document.createElement('div');
    this.Front.className = 'front';
    this.card.append(this.Front);

    this.imgFront = document.createElement('img');
    this.imgFront.src = img;
    this.Front.append(this.imgFront);

    this.bodyFront = document.createElement('div');
    this.bodyFront.className = cardBody;
    this.Front.append(this.bodyFront);

    this.btnFront = document.createElement('button');
    this.btnFront.className = cardBtn;
    this.btnFront.type = 'button';
    this.btnFront.innerText = word;
    this.bodyFront.append(this.btnFront);

    // back side of card
    this.Back = document.createElement('div');
    this.Back.className = 'back';
    this.card.append(this.Back);

    this.imgBack = document.createElement('img');
    this.imgBack.src = img;
    this.Back.append(this.imgBack);

    this.bodyBack = document.createElement('div');
    this.bodyBack.className = cardBody;
    this.Back.append(this.bodyBack);

    this.btnBack = document.createElement('button');
    this.btnBack.className = cardBtn;
    this.btnBack.type = 'button';
    this.btnBack.innerText = translation;
    this.bodyBack.append(this.btnBack);
  }
}
import { Card } from './components/Card';

export class CardsContainer {
  constructor(config = {}) {
    this.cards = config.map((element) => {
      const { word, translation, img, audioSrc } = element;
      return new Card(word, translation, img, audioSrc);    
    });

    this.container = document.createElement('div');
    this.container.className = "row justify-content-center";
    this.container.id = 'cardWrapper';

    this.cards.forEach(item => {
      this.container.append(item.container);
    })
  }
}
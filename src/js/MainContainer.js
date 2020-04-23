import { Main } from '../js/components/Main';

export class MainContainer {
  constructor(config = {}) {
    this.cards = config.map((element) => {
      const { word, img} = element;
      return new Main(word, img);    
    });

    this.container = document.createElement('div');
    this.container.className = "row justify-content-center";
    this.container.id = 'cardWrapper';

    this.cards.forEach(item => {
      this.container.append(item.container);
    })
  }
}
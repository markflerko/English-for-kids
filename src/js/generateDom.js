export class GenerateDom {
  constructor(config = {}) {
    this.app = document.createElement('div')
    this.app.className = "app bg-light";

    this.menuWrap = document.createElement('div');
    this.menuWrap.className = 'menu-wrap';
    this.app.append(this.menuWrap);

    this.input = document.createElement('input');
    this.input.type = 'checkbox';
    this.input.className = 'toggler';
    this.menuWrap.append(this.input);

    this.hamburger = document.createElement('div');
    this.hamburger.className = 'hamburger';
    this.menuWrap.append(this.hamburger);

    this.hamburgerDiv = document.createElement('div');
    this.hamburger.append(this.hamburgerDiv);

    this.menu = document.createElement('div');
    this.menu.className = 'menu';
    this.menuWrap.append(this.menu);

    this.menuDiv1 = document.createElement('div');
    this.menu.append(this.menuDiv1);

    this.menuDiv2 = document.createElement('div');
    this.menuDiv1.append(this.menuDiv2);

    this.ul = document.createElement('ul');
    this.menuDiv2.append(this.ul);

    this.catLinks = config.map((e) => {
      const { word} = e;
      this.li = document.createElement('li');

      this.a = document.createElement('a');
      this.a.id = word;
      if(word=='main') {
        this.a.className = 'active';
      }
      this.a.innerText = word;
      this.li.append(this.a);

      return this.li;
    });

    this.catLinks.forEach(item => {
      this.ul.append(item)
    })

    this.btnDiv = document.createElement('div');
    this.btnDiv.className = "d-flex custom-control custom-switch align-items-center justify-content-center";
    this.app.append(this.btnDiv);

    this.btnInput = document.createElement('input');
    this.btnInput.type = 'checkbox';
    this.btnInput.className = 'custom-control-input';
    this.btnInput.id = 'customSwitch1';
    this.btnDiv.append(this.btnInput);

    this.btnLabel = document.createElement('label');
    this.btnLabel.className = 'custom-control-label';
    this.btnLabel.setAttribute("for", this.btnInput.id);
    this.btnLabel.innerText = 'Click here to start the game';
    this.btnDiv.append(this.btnLabel);

    this.container = document.createElement('div');
    this.container.className = 'container py-5';
    this.container.id = 'container';
    this.app.append(this.container);

  }
}


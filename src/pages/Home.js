import AbstractView from "./AbstractView.js";

// var g = document.createElement("script");
// var s = document.getElementsByTagName("script")[0];
// g.text = Button;
// s.parentNode.insertBefore(g, s);
// // Button();

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
            <p> home </p>
            <a href="/detail" data-link> detail </a>
            <p></p>
            <a href="/edit" data-link> edit </a>
            <p></p>
            <button id="pp">my button</button>
        `;
  }
}

import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Edit");
  }

  async getHtml() {
    return `
            <p> Edit </p>
            <a href="/home" data-link> home </a>
            <button id="bb">my button</button>
        `;
  }
}

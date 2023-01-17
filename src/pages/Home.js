import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
      <button id="homeBtn">
        <img id="homeImg" src="../src/assets/pen.png" alt="pen" />
        <p> 새 글 작성하기</p>
      </button>
      <div id="homeMessages"></div>
        `;
  }
}

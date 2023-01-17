import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
            <button id="flexHome">
              <img id="imgHome" src="src/assets/pen.png" alt="pen" />
              <p> 새 글 작성하기</button>
            </div>
        `;
  }
}

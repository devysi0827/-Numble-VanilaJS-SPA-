import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Detail");
    }

    async getHtml() {
        return`
        <p> detail </p>
        <a href='/' data-link> home </a>
        `;
    }
}
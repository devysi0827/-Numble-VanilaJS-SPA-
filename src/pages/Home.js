import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    };

    async getHtml() {
        return `
            <p> home </p>
            <a href="/detail" data-link> detail </a>
        `;
    };
};
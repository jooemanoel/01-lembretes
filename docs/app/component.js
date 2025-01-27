export class Component {
    element;
    fatherComponent;
    constructor(tag, fatherComponent) {
        if (fatherComponent) {
            this.element = document.createElement(tag);
            this.fatherComponent = fatherComponent;
            this.fatherComponent.element.appendChild(this.element);
        }
        else {
            this.element = document.querySelector(tag);
        }
    }
    destroy() {
        this.element.remove();
    }
}

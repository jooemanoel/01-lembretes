export class Component {
    element: HTMLElement;
    fatherComponent: Component;
    constructor(tag: string, fatherComponent?: Component) {
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
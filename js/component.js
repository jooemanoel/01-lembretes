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
    mostrar() {
        this.element.classList.remove('d-none');
    }
    ocultar() {
        this.element.classList.add('d-none');
    }
}

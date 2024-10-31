export class Component {
    element;
    fatherElement;
    constructor(tag, fatherElement) {
        if (fatherElement) {
            this.element = document.createElement(tag);
            this.fatherElement = fatherElement;
            this.fatherElement.appendChild(this.element);
        }
        else {
            this.element = document.querySelector(tag);
            console.log(this.element);
        }
    }
    mostrar() {
        this.element.classList.remove('d-none');
    }
    ocultar() {
        this.element.classList.add('d-none');
    }
}

export class Componente {
    elemento: HTMLElement;
    elementoPai: HTMLElement;
    constructor(tag: string, elementoPai: HTMLElement) {
        this.elemento = document.createElement(tag);
        this.elementoPai = elementoPai;
        this.elementoPai.appendChild(this.elemento);
    }
    mostrar() {
        this.elemento.classList.remove('d-none');
    }
    ocultar() {
        this.elemento.classList.add('d-none');
    }
}
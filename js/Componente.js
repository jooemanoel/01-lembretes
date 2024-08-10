export class Componente {
    elemento;
    elementoPai;
    constructor(tag, elementoPai) {
        this.elemento = document.createElement(tag);
        this.elementoPai = elementoPai;
        this.elementoPai.appendChild(this.elemento);
    }
    mostrar() {
        this.elemento.classList.remove('hidden');
    }
    ocultar() {
        this.elemento.classList.add('hidden');
    }
}

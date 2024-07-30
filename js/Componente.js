export class Componente {
    constructor(tag, elementoPai, ativo) {
        this.elemento = document.createElement(tag);
        this.elementoPai = elementoPai;
        if (ativo === undefined)
            this.ativo = false;
        else {
            this.mostrar();
        }
    }
    mostrar() {
        if (!this.ativo) {
            this.elementoPai.appendChild(this.elemento);
            this.ativo = true;
        }
    }
    ocultar() {
        if (this.ativo) {
            this.elementoPai.removeChild(this.elemento);
            this.ativo = false;
        }
    }
}
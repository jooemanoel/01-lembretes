import { Componente } from "./Componente.js";

export class Formulario extends Componente {
    form: Componente;
    divTitulo: Componente;
    labelTitulo: Componente;
    inputTitulo: Componente;
    divTexto: Componente;
    labelTexto: Componente;
    textarea: Componente;
    confirmar: Componente;
    constructor() {
        super('div', document.querySelector<HTMLElement>('#principal'));
        this.elemento.classList.add('col');
        this.elemento.classList.add('col-12');
        this.elemento.classList.add('col-md');

        this.form = new Componente('form', this.elemento);

        this.divTitulo = new Componente('div', this.form.elemento);
        this.divTitulo.elemento.classList.add('mb-3');

        this.labelTitulo = new Componente('label', this.divTitulo.elemento);
        this.labelTitulo.elemento.classList.add('form-label');
        this.labelTitulo.elemento.textContent = 'Título:';

        this.inputTitulo = new Componente('input', this.divTitulo.elemento);
        this.inputTitulo.elemento.classList.add('form-control');

        this.divTexto = new Componente('div', this.form.elemento);
        this.divTexto.elemento.classList.add('mb-3');

        this.labelTexto = new Componente('label', this.divTexto.elemento);
        this.labelTexto.elemento.classList.add('form-label');
        this.labelTexto.elemento.textContent = 'Texto:';

        this.textarea = new Componente('textarea', this.divTexto.elemento);
        this.textarea.elemento.classList.add('form-control');

        this.confirmar = new Componente('button', this.form.elemento);
        const aux = this.confirmar.elemento as HTMLButtonElement;
        aux.type = 'submit';
        this.confirmar.elemento.classList.add('btn');
        this.confirmar.elemento.classList.add('btn-primary');
        this.confirmar.elemento.textContent = 'Confirmar';

    }
}
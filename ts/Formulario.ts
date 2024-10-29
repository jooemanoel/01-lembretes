import { Componente } from "./Componente.js";

export class Formulario extends Componente {
    titulo: Componente;
    form: Componente;
    labelTitulo: Componente;
    inputTitulo: Componente;
    labelTexto: Componente;
    textarea: Componente;
    confirmar: Componente;
    constructor() {
        super('div', document.querySelector<HTMLElement>('#principal'));
        this.elemento.classList.add('col');
        this.elemento.classList.add('col-12');
        this.elemento.classList.add('col-md');

        this.titulo = new Componente('div', this.elemento);
        this.titulo.elemento.classList.add('card');
        this.titulo.elemento.classList.add('p-3');
        this.titulo.elemento.classList.add('mb-3');
        this.titulo.elemento.innerText = 'Novo Lembrete';

        this.form = new Componente('form', this.elemento);

        this.labelTitulo = new Componente('label', this.form.elemento);
        this.labelTitulo.elemento.classList.add('form-label');
        this.labelTitulo.elemento.textContent = 'Título:';

        this.inputTitulo = new Componente('input', this.form.elemento);
        this.inputTitulo.elemento.classList.add('form-control');

        this.labelTexto = new Componente('label', this.form.elemento);
        this.labelTexto.elemento.classList.add('form-label');
        this.labelTexto.elemento.textContent = 'Texto:';

        this.textarea = new Componente('textarea', this.form.elemento);
        this.textarea.elemento.classList.add('form-control');

        this.confirmar = new Componente('button', this.form.elemento);
        const aux = this.confirmar.elemento as HTMLButtonElement;
        aux.type = 'submit';
        this.confirmar.elemento.classList.add('mt-3');
        this.confirmar.elemento.classList.add('btn');
        this.confirmar.elemento.classList.add('btn-primary');
        this.confirmar.elemento.textContent = 'Confirmar';

    }
}
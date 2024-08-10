import { Componente } from "./Componente.js";
export class Formulario extends Componente {
    titulo;
    form;
    labelTitulo;
    inputTitulo;
    labelTexto;
    textarea;
    confirmar;
    constructor() {
        super('section', document.querySelector('.principal'));
        this.elemento.classList.add('principal__container');
        this.titulo = new Componente('section', this.elemento);
        this.titulo.elemento.classList.add('principal__container__titulo');
        this.titulo.elemento.innerText = 'Novo Lembrete';
        this.form = new Componente('form', this.elemento);
        this.form.elemento.classList.add('principal__container__form');
        this.labelTitulo = new Componente('label', this.form.elemento);
        this.labelTitulo.elemento.classList.add('principal__form__item');
        this.labelTitulo.elemento.textContent = 'Título:';
        this.inputTitulo = new Componente('input', this.form.elemento);
        this.inputTitulo.elemento.classList.add('principal__form__item');
        this.labelTexto = new Componente('label', this.form.elemento);
        this.labelTexto.elemento.classList.add('principal__form__item');
        this.labelTexto.elemento.textContent = 'Texto:';
        this.textarea = new Componente('textarea', this.form.elemento);
        this.textarea.elemento.classList.add('principal__form__textarea');
        this.confirmar = new Componente('button', this.form.elemento);
        const aux = this.confirmar.elemento;
        aux.type = 'submit';
        this.confirmar.elemento.classList.add('principal__form__item');
        this.confirmar.elemento.textContent = 'Confirmar';
    }
}

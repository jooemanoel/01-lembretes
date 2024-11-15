import { Agencia } from "./agencia.js";
import { Component } from "./component.js";
import { Main } from "./main.js";
import { Service } from "./service.js";

export class Formulario extends Component {
    service = Service.getInstance();
    form: Component;
    labelLembrete: Component;
    inputLembrete: Component;
    confirmar: Component;

    constructor(private alfatherComponent: Main, conteudo?: string) {
        super('div', alfatherComponent);
        this.element.classList.add('col');
        this.element.classList.add('col-12');

        this.form = new Component('form', this);
        this.form.element.classList.add('d-flex');
        this.form.element.classList.add('flex-column');

        this.labelLembrete = new Component('label', this.form);
        this.labelLembrete.element.classList.add('form-label');
        this.labelLembrete.element.textContent = 'Lembrete:';
        this.inputLembrete = new Component('input', this.form);
        this.inputLembrete.element.classList.add('form-control');
        this.inputLembrete.element.classList.add('mb-3');
        if (conteudo) (this.inputLembrete.element as HTMLInputElement).value = conteudo;

        this.confirmar = new Component('button', this.form);
        this.confirmar.element.classList.add('btn');
        this.confirmar.element.classList.add('btn-primary');
        (this.confirmar.element as HTMLButtonElement).type = 'submit';
        this.confirmar.element.textContent = 'Confirmar';

        // Atribui o evento de criar um novo lembrete
        this.form.element.onsubmit = event => {
            event.preventDefault();
            this.service.novoLembrete((this.inputLembrete.element as HTMLInputElement).value);
            this.alfatherComponent.mostrarAgencia();
        }
    }
}
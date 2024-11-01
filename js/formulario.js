import { Component } from "./component.js";
import { Service } from "./service.js";
export class Formulario extends Component {
    alfatherComponent;
    service = Service.getInstance();
    form;
    labelLembrete;
    inputLembrete;
    confirmar;
    constructor(alfatherComponent, conteudo) {
        super('div', alfatherComponent);
        this.alfatherComponent = alfatherComponent;
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
        if (conteudo)
            this.inputLembrete.element.value = conteudo;
        this.confirmar = new Component('button', this.form);
        this.confirmar.element.classList.add('btn');
        this.confirmar.element.classList.add('btn-primary');
        this.confirmar.element.type = 'submit';
        this.confirmar.element.textContent = 'Confirmar';
        // Atribui o evento de criar um novo lembrete
        this.form.element.onsubmit = event => {
            event.preventDefault();
            this.service.novoLembrete(this.inputLembrete.element.value);
            this.alfatherComponent.mostrarAgencia();
        };
    }
}

import { Component } from "./Componente.js";
export class Formulario extends Component {
    agencia;
    form;
    labelLembrete;
    inputLembrete;
    confirmar;
    constructor(agencia) {
        super('div', document.querySelector('#principal'));
        this.element.classList.add('col');
        this.element.classList.add('col-12');
        this.form = new Component('form', this.element);
        this.form.element.classList.add('d-flex');
        this.form.element.classList.add('flex-column');
        this.labelLembrete = new Component('label', this.form.element);
        this.labelLembrete.element.classList.add('form-label');
        this.labelLembrete.element.textContent = 'Lembrete:';
        this.inputLembrete = new Component('input', this.form.element);
        this.inputLembrete.element.classList.add('form-control');
        this.inputLembrete.element.classList.add('mb-3');
        this.confirmar = new Component('button', this.form.element);
        this.confirmar.element.classList.add('btn');
        this.confirmar.element.classList.add('btn-primary');
        this.confirmar.element.type = 'submit';
        this.confirmar.element.textContent = 'Confirmar';
        this.agencia = agencia;
        // Atribui o evento de criar um novo lembrete
        this.form.element.onsubmit = event => {
            event.preventDefault();
            agencia.novoLembrete(this.inputLembrete.element.value);
            this.form.element.reset();
            this.agencia.mostrar();
            this.ocultar();
        };
    }
}

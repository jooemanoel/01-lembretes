import { Agencia } from "./Agencia.js";
import { Componente } from "./Componente.js";

export class Formulario extends Componente {
    agencia: Agencia;
    form: Componente;
    labelLembrete: Componente;
    inputLembrete: Componente;
    confirmar: Componente;

    constructor(agencia: Agencia) {
        super('div', document.querySelector<HTMLElement>('#principal'));
        this.elemento.classList.add('col');
        this.elemento.classList.add('col-12');

        this.form = new Componente('form', this.elemento);
        this.form.elemento.classList.add('d-flex');
        this.form.elemento.classList.add('flex-column');

        this.labelLembrete = new Componente('label', this.form.elemento);
        this.labelLembrete.elemento.classList.add('form-label');
        this.labelLembrete.elemento.textContent = 'Lembrete:';
        this.inputLembrete = new Componente('input', this.form.elemento);
        this.inputLembrete.elemento.classList.add('form-control');
        this.inputLembrete.elemento.classList.add('mb-3');

        this.confirmar = new Componente('button', this.form.elemento);
        this.confirmar.elemento.classList.add('btn');
        this.confirmar.elemento.classList.add('btn-primary');
        (this.confirmar.elemento as HTMLButtonElement).type = 'submit';
        this.confirmar.elemento.textContent = 'Confirmar';

        this.agencia = agencia;
        // Atribui o evento de criar um novo lembrete
        this.form.elemento.onsubmit = event => {
            event.preventDefault();
            agencia.novoLembrete((this.inputLembrete.elemento as HTMLInputElement).value);
            (this.form.elemento as HTMLFormElement).reset();
            this.agencia.mostrar();
            this.ocultar();
        }
    }
}
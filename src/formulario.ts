import { Main } from "./main.js";
import { Service } from "./service.js";

export class Formulario {
    formulario: HTMLFormElement;
    inputNovo: HTMLInputElement;
    botaoNovo: HTMLButtonElement;
    service = Service.getInstance();

    constructor(private main: Main) {
        this.formulario = document.querySelector('form');
        this.inputNovo = this.formulario.querySelector('input');
        this.botaoNovo = this.formulario.querySelector('button');
        this.formulario.onsubmit = (event) => {
            event.preventDefault();
            if (!this.inputNovo.value) return;
            this.service.novoLembrete(this.inputNovo.value);
            this.main.agencia.renderizar();
            this.inputNovo.value = '';
            this.botaoNovo.innerText = 'Novo';
        };
    }
}
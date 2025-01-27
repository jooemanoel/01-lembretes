import { Service } from "./service.js";
export class Formulario {
    main;
    formulario;
    inputNovo;
    botaoNovo;
    service = Service.getInstance();
    constructor(main) {
        this.main = main;
        this.formulario = document.querySelector('form');
        this.inputNovo = this.formulario.querySelector('input');
        this.botaoNovo = this.formulario.querySelector('button');
        this.formulario.onsubmit = (event) => {
            event.preventDefault();
            this.service.novoLembrete(this.inputNovo.value);
            this.main.agencia.renderizar();
            this.inputNovo.value = '';
            this.botaoNovo.innerText = 'Novo';
        };
    }
}

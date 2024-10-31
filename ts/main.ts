import { Agencia } from "./agencia.js";
import { Component } from "./component.js";
import { Formulario } from "./formulario.js";
import { Service } from "./service.js";

export class Main extends Component {
    service = Service.getInstance();
    // agencia e formulário - páginas
    agencia!: Agencia;
    formulario!: Formulario;
    // botão do menu hamburguer para ajuste
    botaoHamburguer = document.querySelector('#botao-hamburguer') as HTMLButtonElement;
    // botões do cabeçalho
    botaoInicio = document.querySelector('#botao-inicio') as HTMLElement;
    // botaoNovo = document.querySelector('#botao-novo') as HTMLElement;
    botaoNovo = new Component('#botao-novo');
    botaoLimpar = document.querySelector('#botao-limpar') as HTMLElement;
    // botão de utilidade para abrir o modal de limpeza
    botaoAbrirModal = document.querySelector('#botao-abrir-modal') as HTMLButtonElement;
    // botão dentro do modal pra confirmar limpeza
    botaoLimparMesmo = document.querySelector('#botao-limpar-mesmo') as HTMLButtonElement;
    constructor() {
        super('#principal');
        this.agencia = new Agencia(this);
        this.formulario = new Formulario(this);
        this.botaoInicio.onclick = () => {
            this.mostrarAgencia();
        };
        this.botaoNovo.element.onclick = () => {
            this.mostrarNovo();
            this.botaoHamburguer.click();
        };
        this.botaoLimpar.onclick = () => {
            this.abrirModalLimpar();
        };
        this.botaoLimparMesmo.onclick = () => {
            this.limpar();
        }
        this.mostrarAgencia();
    }
    // função e evento para mostrar a agência
    mostrarAgencia() {
        this.agencia.mostrar();
        this.formulario.ocultar();
    }
    // função e evento para mostrar o formulário
    mostrarNovo() {
        this.agencia.ocultar();
        this.formulario.mostrar();
    }
    // função e evento para limpar o localStorage
    abrirModalLimpar() {
        this.botaoAbrirModal.click();
    }
    // Botão de confirmar dentro do modal
    limpar() {
        this.agencia.excluirTudo();
        this.service.excluirTudo();
        this.botaoHamburguer.click();
        this.botaoAbrirModal.click();
    }
}
const main = new Main();
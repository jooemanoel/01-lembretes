import { Agencia } from "./agencia.js";
import { Component } from "./component.js";
import { Formulario } from "./formulario.js";
import { Service } from "./service.js";
export class Main extends Component {
    paginaAtual = 0;
    service = Service.getInstance();
    // agencia e formulário - páginas
    agencia;
    formulario;
    // botão do menu hamburguer para ajuste
    botaoHamburguer = new Component('#botao-hamburguer');
    // botões do cabeçalho
    botaoInicio = new Component('#botao-inicio');
    // botaoNovo = document.querySelector('#botao-novo') as HTMLElement;
    botaoNovo = new Component('#botao-novo');
    botaoLimpar = new Component('#botao-limpar');
    // botão de utilidade para abrir o modal de limpeza
    botaoAbrirModal = new Component('#botao-abrir-modal');
    // botão dentro do modal pra confirmar limpeza
    botaoLimparMesmo = new Component('#botao-limpar-mesmo');
    constructor() {
        super('#principal');
        this.agencia = new Agencia(this);
        this.botaoInicio.element.onclick = () => {
            this.mostrarAgencia();
        };
        this.botaoNovo.element.onclick = () => {
            this.mostrarNovo();
            this.botaoHamburguer.element.click();
        };
        this.botaoLimpar.element.onclick = () => {
            this.abrirModalLimpar();
        };
        this.botaoLimparMesmo.element.onclick = () => {
            this.limpar();
        };
    }
    // função e evento para mostrar a agência
    mostrarAgencia() {
        if (this.paginaAtual) {
            this.agencia = new Agencia(this);
            this.formulario.destroy();
            this.paginaAtual = 0;
        }
    }
    // função e evento para mostrar o formulário
    mostrarNovo(conteudo) {
        if (!this.paginaAtual) {
            this.agencia.destroy();
            this.formulario = new Formulario(this, conteudo);
            this.paginaAtual = 1;
        }
    }
    // função e evento para limpar o localStorage
    abrirModalLimpar() {
        this.botaoAbrirModal.element.click();
    }
    // Botão de confirmar dentro do modal
    limpar() {
        this.agencia.excluirTudo();
        this.service.excluirTudo();
        this.botaoHamburguer.element.click();
        this.botaoAbrirModal.element.click();
    }
}
const main = new Main();

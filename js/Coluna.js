import { Component } from "./Componente.js";
export class Coluna extends Component {
    agencia;
    conteudo;
    card;
    cardBody;
    texto;
    botaoEditar;
    botaoExcluir;
    constructor(elementoPai, conteudo, agencia) {
        super('div', elementoPai);
        this.element.classList.add('col');
        this.element.classList.add('col-12');
        this.element.classList.add('col-md-4');
        this.element.classList.add('col-lg-3');
        this.element.classList.add('mb-3');
        this.card = new Component('div', this.element);
        this.card.element.classList.add('card');
        this.cardBody = new Component('div', this.card.element);
        this.cardBody.element.classList.add('card-body');
        this.cardBody.element.classList.add('d-flex');
        this.cardBody.element.classList.add('gap-3');
        this.texto = new Component('div', this.cardBody.element);
        this.texto.element.classList.add('flex-fill');
        this.texto.element.textContent = `${conteudo}`;
        this.botaoEditar = new Component('div', this.cardBody.element);
        this.botaoEditar.element.innerHTML = `<i class="fas fa-pencil-alt" style="color: white; font-size: 20px;"></i>`;
        this.botaoExcluir = new Component('div', this.cardBody.element);
        this.botaoExcluir.element.innerHTML = `<i class="fas fa-trash" style="color: white; font-size: 20px;"></i>`;
        this.botaoExcluir.element.addEventListener('click', () => this.agencia.excluirColuna(this));
        this.conteudo = structuredClone(conteudo);
        this.agencia = agencia;
        this.botaoEditar.element.addEventListener('click', () => {
            this.agencia.indexColunaEmEdicao = this.agencia.listaColunas.indexOf(this);
            this.agencia.formulario.inputLembrete.element.value = this.conteudo;
            this.agencia.formulario.mostrar();
            this.agencia.ocultar();
        });
    }
}

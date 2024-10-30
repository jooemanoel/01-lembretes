import { Componente } from "./Componente.js";
export class Coluna extends Componente {
    agencia;
    conteudo;
    card;
    cardHeader;
    titulo;
    botaoExcluir;
    cardBody;
    texto;
    botaoEditar;
    constructor(elementoPai, conteudo, agencia) {
        super('div', elementoPai);
        this.elemento.classList.add('col');
        this.elemento.classList.add('col-12');
        this.elemento.classList.add('col-md');
        this.elemento.classList.add('mb-3');
        this.card = new Componente('div', this.elemento);
        this.card.elemento.classList.add('card');
        this.cardHeader = new Componente('div', this.card.elemento);
        this.cardHeader.elemento.classList.add('card-header');
        this.cardHeader.elemento.classList.add('d-flex');
        this.titulo = new Componente('div', this.cardHeader.elemento);
        this.titulo.elemento.classList.add('flex-fill');
        this.titulo.elemento.textContent = 'Lembrete:';
        this.botaoExcluir = new Componente('button', this.cardHeader.elemento);
        this.botaoExcluir.elemento.classList.add('btn-close');
        this.botaoExcluir.elemento.addEventListener('click', () => this.agencia.excluirColuna(this));
        this.cardBody = new Componente('div', this.card.elemento);
        this.cardBody.elemento.classList.add('card-body');
        this.cardBody.elemento.classList.add('d-flex');
        this.texto = new Componente('div', this.cardBody.elemento);
        this.texto.elemento.classList.add('flex-fill');
        this.texto.elemento.textContent = `${conteudo}`;
        this.botaoEditar = new Componente('div', this.cardBody.elemento);
        this.botaoEditar.elemento.innerHTML = `<i class="fas fa-pencil-alt" style="color: white; font-size: 20px;"></i>`;
        this.conteudo = structuredClone(conteudo);
        this.agencia = agencia;
        this.botaoEditar.elemento.addEventListener('click', () => {
            this.agencia.indexColunaEmEdicao = this.agencia.listaColunas.indexOf(this);
            this.agencia.formulario.inputLembrete.elemento.value = this.conteudo;
            this.agencia.formulario.mostrar();
            this.agencia.ocultar();
            console.log(this.agencia.indexColunaEmEdicao);
        });
    }
}

import { Agencia } from "./agencia.js";
import { Component } from "./component.js";
import { Main } from "./main.js";

export class Coluna extends Component {
  agencia: Agencia;
  conteudo: string;
  card: Component;
  cardBody: Component;
  texto: Component;
  botaoEditar: Component;
  botaoExcluir: Component;
  constructor(private mainComponent: Main, conteudo: string, agencia: Agencia) {
    super('div', mainComponent);
    this.element.classList.add('col');
    this.element.classList.add('col-12');
    this.element.classList.add('col-md-4');
    this.element.classList.add('col-lg-3');
    this.element.classList.add('mb-3');

    this.card = new Component('div', this);
    this.card.element.classList.add('card');

    this.cardBody = new Component('div', this.card);
    this.cardBody.element.classList.add('card-body');
    this.cardBody.element.classList.add('d-flex');
    this.cardBody.element.classList.add('gap-3');

    this.texto = new Component('div', this.cardBody);
    this.texto.element.classList.add('flex-fill');
    this.texto.element.textContent = `${conteudo}`;

    this.botaoEditar = new Component('div', this.cardBody);
    this.botaoEditar.element.innerHTML = `<i class="fas fa-pencil-alt" style="color: white; font-size: 20px;"></i>`;

    this.botaoExcluir = new Component('div', this.cardBody);
    this.botaoExcluir.element.innerHTML = `<i class="fas fa-trash" style="color: white; font-size: 20px;"></i>`;
    this.botaoExcluir.element.addEventListener('click', () => this.agencia.excluirColuna(this));

    this.conteudo = structuredClone(conteudo);
    this.agencia = agencia;

    this.botaoEditar.element.addEventListener('click', () => {
      this.agencia.indexColunaEmEdicao = this.agencia.colunas.indexOf(this);
      (this.mainComponent.formulario.inputLembrete.element as HTMLInputElement).value = this.conteudo;
      this.mainComponent.formulario.mostrar();
      this.agencia.ocultar();
    });
  }
}
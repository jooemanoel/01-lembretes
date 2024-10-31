import { Agencia } from "./Agencia.js";
import { Componente } from "./Componente.js";

export class Coluna extends Componente {
  agencia: Agencia;
  conteudo: string;
  card: Componente;
  cardBody: Componente;
  texto: Componente;
  botaoEditar: Componente;
  botaoExcluir: Componente;
  constructor(elementoPai: HTMLElement, conteudo: string, agencia: Agencia) {
    super('div', elementoPai);
    this.elemento.classList.add('col');
    this.elemento.classList.add('col-12');
    this.elemento.classList.add('col-md-4');
    this.elemento.classList.add('col-lg-3');
    this.elemento.classList.add('mb-3');

    this.card = new Componente('div', this.elemento);
    this.card.elemento.classList.add('card');

    this.cardBody = new Componente('div', this.card.elemento);
    this.cardBody.elemento.classList.add('card-body');
    this.cardBody.elemento.classList.add('d-flex');
    this.cardBody.elemento.classList.add('gap-3');

    this.texto = new Componente('div', this.cardBody.elemento);
    this.texto.elemento.classList.add('flex-fill');
    this.texto.elemento.textContent = `${conteudo}`;

    this.botaoEditar = new Componente('div', this.cardBody.elemento);
    this.botaoEditar.elemento.innerHTML = `<i class="fas fa-pencil-alt" style="color: white; font-size: 20px;"></i>`;

    this.botaoExcluir = new Componente('div', this.cardBody.elemento);
    this.botaoExcluir.elemento.innerHTML = `<i class="fas fa-trash" style="color: white; font-size: 20px;"></i>`;
    this.botaoExcluir.elemento.addEventListener('click', () => this.agencia.excluirColuna(this));

    this.conteudo = structuredClone(conteudo);
    this.agencia = agencia;

    this.botaoEditar.elemento.addEventListener('click', () => {
      this.agencia.indexColunaEmEdicao = this.agencia.listaColunas.indexOf(this);
      (this.agencia.formulario.inputLembrete.elemento as HTMLInputElement).value = this.conteudo;
      this.agencia.formulario.mostrar();
      this.agencia.ocultar();
      console.log(this.agencia.indexColunaEmEdicao);
    });
  }
}
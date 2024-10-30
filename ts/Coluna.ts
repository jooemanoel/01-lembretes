import { Agencia } from "./Agencia.js";
import { Componente } from "./Componente.js";

export class Coluna extends Componente {
  agencia: Agencia;
  conteudo: string;
  card: Componente;
  cardHeader: Componente;
  titulo: Componente;
  botaoExcluir: Componente;
  cardBody: Componente;
  constructor(elementoPai: HTMLElement, conteudo: string, agencia: Agencia) {
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
    this.botaoExcluir.elemento.addEventListener('click', () => {
      this.agencia.excluirColuna(this);
    });

    this.cardBody = new Componente('div', this.card.elemento);
    this.cardBody.elemento.classList.add('card-body');
    this.cardBody.elemento.innerHTML = `<p class="card-text">${conteudo}</p>`;

    this.conteudo = structuredClone(conteudo);
    this.agencia = agencia;
  }
}
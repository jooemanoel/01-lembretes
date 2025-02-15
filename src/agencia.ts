import { Main } from "./main.js";
import { Service } from "./service.js";

export class Agencia {
  tabela: HTMLTableElement;
  corpo: HTMLElement;
  textoListaVazia: HTMLElement;
  service = Service.getInstance();
  constructor(private main: Main) {
    this.tabela = document.querySelector("table");
    this.corpo = this.tabela.querySelector(".table-group-divider");
    this.textoListaVazia = document.querySelector("#lista-vazia");
    const botaoOrdenarCrescente = this.tabela.querySelector("#az");
    botaoOrdenarCrescente.addEventListener("click", () => {
      this.service.ordenar(true);
      this.renderizar();
    });
    const botaoOrdenarDecrescente = this.tabela.querySelector("#za");
    botaoOrdenarDecrescente.addEventListener("click", () => {
      this.service.ordenar(false);
      this.renderizar();
    });
    this.carregar();
  }
  async carregar() {
    await this.service.carregar();
    this.renderizar();
  }
  renderizar() {
    this.corpo.innerHTML = "";
    if (!this.service.itens.length) {
      this.tabela.style.display = "none";
      this.textoListaVazia.style.display = "block";
    } else {
      this.tabela.style.display = "table";
      this.textoListaVazia.style.display = "none";
    }
    this.service.itens.forEach((lembrete) => {
      this.corpo.innerHTML += `
            <tr>
                <td colspan="2">
                <div class="d-flex">
                    <button class="btn btn-dark" id="editar-${lembrete.id}">
                    <i class="bi bi-pencil"></i>
                    </button>
                    <div
                    class="flex-fill d-flex align-items-center justify-content-center"
                    >
                    ${lembrete.nome}
                    </div>
                    <button class="btn btn-dark" id="excluir-${lembrete.id}">
                    <i class="bi bi-trash"></i>
                    </button>
                </div>
                </td>
            </tr>`;
    });
    this.service.itens.forEach((lembrete) => {
      const botaoEditar: HTMLButtonElement = this.corpo.querySelector(
        `#editar-${lembrete.id}`
      );
      botaoEditar.addEventListener("click", () => {
        this.main.formulario.inputNovo.value = lembrete.nome;
        this.main.formulario.botaoNovo.innerText = "Editar";
        this.service.indexLembreteEmEdicao = lembrete.id;
      });
      const botaoExcluir: HTMLButtonElement = this.corpo.querySelector(
        `#excluir-${lembrete.id}`
      );
      botaoExcluir.addEventListener("click", () => {
        this.service.excluirLembrete(lembrete.id);
        this.main.agencia.renderizar();
      });
    });
  }
}

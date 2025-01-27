import { Service } from "./service.js";
export class Agencia {
    main;
    tabela;
    corpo;
    textoListaVazia;
    service = Service.getInstance();
    constructor(main) {
        this.main = main;
        this.tabela = document.querySelector('table');
        this.corpo = this.tabela.querySelector('.table-group-divider');
        this.textoListaVazia = document.querySelector('#lista-vazia');
        const botaoOrdenarCrescente = this.tabela.querySelector('#az');
        console.log(botaoOrdenarCrescente);
        botaoOrdenarCrescente.addEventListener('click', () => {
            this.service.ordenar(true);
            this.renderizar();
        });
        const botaoOrdenarDecrescente = this.tabela.querySelector('#za');
        console.log(botaoOrdenarDecrescente);
        botaoOrdenarDecrescente.addEventListener('click', () => {
            this.service.ordenar(false);
            this.renderizar();
        });
        this.renderizar();
    }
    renderizar() {
        this.corpo.innerHTML = '';
        if (!this.service.lembretes.length) {
            this.tabela.style.display = 'none';
            this.textoListaVazia.style.display = 'block';
        }
        else {
            this.tabela.style.display = 'table';
            this.textoListaVazia.style.display = 'none';
        }
        this.service.lembretes.forEach(lembrete => {
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
                    ${lembrete.conteudo}
                    </div>
                    <button class="btn btn-dark" id="excluir-${lembrete.id}">
                    <i class="bi bi-trash"></i>
                    </button>
                </div>
                </td>
            </tr>`;
        });
        this.service.lembretes.forEach(lembrete => {
            const botaoEditar = this.corpo.querySelector(`#editar-${lembrete.id}`);
            botaoEditar.addEventListener('click', () => {
                this.main.formulario.inputNovo.value = lembrete.conteudo;
                this.main.formulario.botaoNovo.innerText = 'Editar';
                this.service.indexLembreteEmEdicao = lembrete.id;
            });
            const botaoExcluir = this.corpo.querySelector(`#excluir-${lembrete.id}`);
            botaoExcluir.addEventListener('click', () => {
                this.service.excluirLembrete(lembrete.id);
                this.main.agencia.renderizar();
            });
        });
    }
}

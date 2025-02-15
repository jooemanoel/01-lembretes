import { Lista } from "./interfaces/lista";

export class Service {
  private static instance: Service;
  lista: Lista = { id: 1, nome: "COMPRAS", itens: [] };
  outras: Lista[] = [];
  indexLembreteEmEdicao = 0;
  public static getInstance(): Service {
    if (!this.instance) {
      this.instance = new Service();
    }
    return this.instance;
  }
  async carregar() {
    await fetch("https://json-server-seven-alpha.vercel.app/read")
      .then((res) => res.json())
      .then((res) => res.data)
      .then((data) => {
        if (!data) return;
        data.forEach((linha: string[]) => {
          linha.forEach((coluna) => {
            const lista = JSON.parse(coluna) as Lista;
            if (lista.nome === "COMPRAS") this.lista = lista;
            else this.outras.push(lista);
          });
        });
        console.log("Lista carregada: ", this.lista);
      });
  }
  async salvar() {
    const buffer = [...this.outras, this.lista];
    const save = buffer.map((lista) => [JSON.stringify(lista)]);
    const requisicao = {
      values: save,
    };
    console.log("Requisição: ", requisicao);
    await fetch("https://json-server-seven-alpha.vercel.app/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requisicao),
    })
      .then((res) => res.json())
      .then((res) => console.log("Dados salvos:", res))
      .catch((error) => console.error("Erro ao salvar:", error));
  }
  novoLembrete(value: string) {
    if (!this.indexLembreteEmEdicao) {
      this.lista.itens.push({
        id: this.gerarId(),
        nome: value,
        checked: false,
      });
      this.salvar();
    } else {
      this.editarLembrete(value);
      this.indexLembreteEmEdicao = 0;
    }
  }
  excluirLembrete(id: number) {
    this.lista.itens = this.lista.itens.filter((x) => x.id !== id);
    this.salvar();
  }
  editarLembrete(value: string) {
    const lembrete = this.lista.itens.find(
      (x) => x.id === this.indexLembreteEmEdicao
    );
    if (lembrete) lembrete.nome = value;
    this.salvar();
  }
  gerarId() {
    let max = 0;
    this.lista.itens.forEach((lembrete) => {
      if (lembrete.id > max) max = lembrete.id;
    });
    return max + 1;
  }
  ordenar(crescente: boolean) {
    if (crescente)
      this.lista.itens.sort((a, b) => a.nome.localeCompare(b.nome));
    else this.lista.itens.sort((a, b) => b.nome.localeCompare(a.nome));
    this.salvar();
  }
}

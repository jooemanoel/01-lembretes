export class Service {
    static instance;
    itens = [];
    indexLembreteEmEdicao = 0;
    constructor() {
        // this.lembretes = JSON.parse(localStorage.getItem("lembretes") ?? "[]");
        // this.carregar();
    }
    async carregar() {
        await fetch("https://json-server-seven-alpha.vercel.app/read")
            .then((res) => res.json())
            .then((res) => res.data)
            .then((data) => {
            if (!data)
                return;
            data.forEach((x) => {
                const item = { id: parseInt(x[0]), nome: x[1] };
                this.itens = [...this.itens, item];
            });
        });
        console.log(this.itens);
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Service();
        }
        return this.instance;
    }
    async salvar() {
        // Transformando os itens no formato correto para o Google Sheets
        const valores = this.itens.map((item) => [item.id.toString(), item.nome]);
        const requisicao = {
            values: valores,
        };
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
    salvarLembretes() {
        this.salvar();
        localStorage.setItem("lembretes", JSON.stringify(this.itens));
    }
    novoLembrete(value) {
        if (!this.indexLembreteEmEdicao) {
            this.itens.push({ id: this.gerarId(), nome: value });
            this.salvarLembretes();
        }
        else {
            this.editarLembrete(value);
            this.indexLembreteEmEdicao = 0;
        }
    }
    excluirLembrete(id) {
        this.itens = this.itens.filter((x) => x.id !== id);
        this.salvarLembretes();
    }
    editarLembrete(value) {
        const lembrete = this.itens.find((x) => x.id === this.indexLembreteEmEdicao);
        if (lembrete)
            lembrete.nome = value;
        this.salvarLembretes();
    }
    gerarId() {
        let max = 0;
        this.itens.forEach((lembrete) => {
            if (lembrete.id > max)
                max = lembrete.id;
        });
        return max + 1;
    }
    ordenar(crescente) {
        if (crescente)
            this.itens.sort((a, b) => a.nome.localeCompare(b.nome));
        else
            this.itens.sort((a, b) => b.nome.localeCompare(a.nome));
        this.salvarLembretes();
    }
}

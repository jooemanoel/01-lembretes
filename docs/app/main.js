import { Agencia } from "./agencia.js";
import { Formulario } from "./formulario.js";
export class Main {
    agencia;
    formulario;
    constructor() {
        this.agencia = new Agencia(this);
        this.formulario = new Formulario(this);
    }
}
new Main();

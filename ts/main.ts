import { Agencia } from "./Agencia.js";
import { Formulario } from "./Formulario.js";
import { Lembrete } from "./Lembrete.js";

const agencia = new Agencia();
const formulario = new Formulario();
formulario.form.elemento.onsubmit = event => {
    event.preventDefault();
    const auxTitulo = formulario.inputTitulo.elemento as HTMLInputElement;
    const auxTexto = formulario.textarea.elemento as HTMLTextAreaElement;
    const auxLembrete: Lembrete = { titulo: auxTitulo.value, texto: auxTexto.value };
    agencia.novoLembrete(auxLembrete);
    const aux = formulario.form.elemento as HTMLFormElement;
    aux.reset();
    mostrarAgencia();
}
// função e evento para mostrar a agência
const mostrarAgencia = () => {
    agencia.mostrar();
    formulario.ocultar();
}
const botaoInicio = document.querySelector('#botao-inicio') as HTMLElement;
botaoInicio.onclick = mostrarAgencia;
// função e evento para mostrar o formulário
const mostrarNovo = () => {
    agencia.ocultar();
    formulario.mostrar();
}
const botaoNovo = document.querySelector('#botao-novo') as HTMLElement;
botaoNovo.onclick = mostrarNovo;
// função e evento para limpar o localStorage
const limpar = () => {
    localStorage.clear();
    location.reload();
}
const botaoLimpar = document.querySelector('#botao-limpar') as HTMLElement;
botaoLimpar.onclick = limpar;
// mostra a agência ao carregar a página
window.onload = () => {
    mostrarAgencia();
}
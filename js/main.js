import { Agencia } from "./Agencia.js";
import { Formulario } from "./Formulario.js";
const agencia = new Agencia();
const formulario = new Formulario();
formulario.form.elemento.onsubmit = event => {
    event.preventDefault();
    const auxTitulo = formulario.inputTitulo.elemento;
    const auxTexto = formulario.textarea.elemento;
    const auxLembrete = { titulo: auxTitulo.value, texto: auxTexto.value };
    agencia.novoLembrete(auxLembrete);
    const aux = formulario.form.elemento;
    aux.reset();
    mostrarAgencia();
};
// função e evento para mostrar a agência
const mostrarAgencia = () => {
    agencia.mostrar();
    formulario.ocultar();
};
const botaoInicio = document.querySelector('#botao-inicio');
botaoInicio.onclick = mostrarAgencia;
// função e evento para mostrar o formulário
const mostrarNovo = () => {
    agencia.ocultar();
    formulario.mostrar();
};
const botaoNovo = document.querySelector('#botao-novo');
botaoNovo.onclick = mostrarNovo;
// função e evento para limpar o localStorage
const limpar = () => {
    localStorage.clear();
    location.reload();
};
const botaoLimpar = document.querySelector('#botao-limpar');
botaoLimpar.onclick = limpar;
// mostra a agência ao carregar a página
window.onload = () => {
    mostrarAgencia();
};

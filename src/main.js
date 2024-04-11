function calcularIgual() {
    let resultado = document.getElementsByName('resultado')[0];
    if (resultado.value !== '') {
        resultado.value = eval(resultado.value);
    }
}

function apagarUltimoCaractere() {
    let resultado = document.getElementsByName('resultado')[0];
    resultado.value = resultado.value.slice(0, -1);
}
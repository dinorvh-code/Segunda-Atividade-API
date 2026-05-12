const btnBuscar = document.getElementById('btnBuscar');
const campoBusca = document.getElementById('campoBusca');
const resultado = document.getElementById ('resultado');
const msgErro = document.getElementById ('msgErro');

function realizarBusca(){
    const numero = campoBusca.value.toNumber().Max8();

    if (numero === ""){alert("Por favor, digite um número!");return;}

    const url = `link da API${numero}`;

}
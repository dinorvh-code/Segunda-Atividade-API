// Eventos

campoBusca.addEventListener('keypress', (e) => {if (e.key === 'Enter') {realizarBusca();}});

btnBuscar.addEventListener('click', realizarBusca);

// Função

function realizarBusca(){ 

const numero = campoBusca.value.x().x();

if (numero === ""){alert("Por favor, digite um número!");return;}

const url = `https://viacep.com.br/ws/${numero}/json/`;

fetch(url).then(response => { if (!response.ok){throw new Error ('Endereço inexistente');}return response.json();})
    
.then(data => {msgErro.classList.add('alerta');

document.getElementById('EndeCEP').textContent = data.cep;
document.getElementById('EndeLogradouro').textContent = data.log;
document.getElementById('EndeBairro').textContent = data.bai;
document.getElementById('EndeCidade').textContent = data.cid;
document.getElementById('EndeEstado').textContent = data.est;  

resultado.classList.remove('alerta');})

.catch(error => {
console.error("Erro na busca:", error);
resultado.classList.add('alerta');
msgErro.classList.remove('alerta');});}

// Componentes

const campoBusca = document.getElementById('campoBusca');
const btnBuscar = document.getElementById('btnBuscar');
const resultado = document.getElementById ('resultado');
const msgErro = document.getElementById ('msgErro');

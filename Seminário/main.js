document.addEventListener('DOMContentLoaded'), function(){

const formulário = documemt.getElementById('formulário')
const nomeInput = document.getElementById('nome')
const sobrenomeInput = document.getElementById('sobrenome')
const emailInput = document.getElementById('email')
const dataInput = document.getElementById('data')
const nomeSalvoSpan = document.getElementById('nomeSalvo')
const sobrenomeSalvoSpan = document.getElementById('sobrenomeSalvo')
const emailSalvoSpan = document.getElementById('emailSalvo')
const dataSalvaSpan = document.getElementById('dataSalva')

formulário.addEventListener('submit', function(event) {


event.preventDefault(); //Evita o envio tradicional do formulário

const nome = nomeInput.value;
const sobrenome = sobrenomeInput.value;
const email = emailInput.value;
const data = dataInput.value;


//Salvar os dados no LocalStorage

localStorage.setItem('nome', nome);
localStorage.setItem('sobrenome', sobrenome);
localStorage.setItem('email', email);
localStorage.setItem('data', data);

//Atualizar os dados exibidos na página

nomeSalvoSpan.textContent = nome;
sobrenomeSalvoSpan.textContent = sobrenome;
emailSalvoSpan.textContent = email;
dataSalvaSpan.textContent = data;


});


//Carregar dados dados salvos ao recarregar a 

const nomeSalvo = localStorage('nome');
const sobrenome = localStorage('sobrenome');
const emailSalvo = localStorage('email');
const dataSalva = localStorage('data');

   
};



let cont = 0;

const botaoMais = document.querySelector('#botao-mais')

const botaoMenos = document.querySelector('#botao-menos')

botaoMais.addEventListener("click", () => soma(+1));

botaoMenos.addEventListener("click", () => soma(-1));


function soma(qtde){
  console.log(cont)
cont += qtde;

const output = document.querySelector('output');
output.innerHTML = cont;

if (cont > 0) {
  output.classList.add('text-success');
} else if (cont == 0) {
  output.classList.remove('text-success');
  output.classList.remove('text-danger');
} else {
  output.classList.add('text-danger');
}
}

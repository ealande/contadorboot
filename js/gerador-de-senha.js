const botaoGerar = document.querySelector('#botao-gerar');
const switches = Array.from(
  document.querySelectorAll('input[type="checkbox"]'))

const inputComprimento = document.querySelector('#comprimento');
const inputOutput = document.querySelector('output');

botaoGerar.addEventListener('click', () =>{

  const switchesTickados = switches.filter((s) => s.checked)
  const regras = switchesTickados.map((s) => s.id);
  const comprimento = +inputComprimento.value;

  const caracteres = new Array(comprimento).fill('').map(() => {
    const regra = regras[randInt(regras.length)];
    switch (regra) {
      case 'numeros':
        return '0123456789'[randInt(10)];
      case 'maiusculas':
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[randInt(26)];
      case 'minusculas':
        return 'abcdefghijklmnopqrstuvwxyz'[randInt(26)];
      case 'especiais':
        return '!@#$%&*-_=+,.:;~'[randInt(16)]
      }
  })

  inputOutput.innerHTML = caracteres.reduce((acum, str) => acum + str, '');
  inputOutput.innerHTML = caracteres.join('');

});

function randInt(range) {
  return Math.min(
  Math.floor(range * Math.random()),
  range - 1)
}

switches.forEach(s => {
  s.addEventListener('change', () => {
    const tickados = switches.filter(s => s.checked).length;
    botaoGerar.disabled = tickados == 0;
  });
})

const botaoIniciar = document.querySelector('#botao-iniciar');
const botaoPausar = document.querySelector('#botao-pausar');
const botaoReiniciar = document.querySelector('#botao-reiniciar');
const output = document.querySelector('output');

let cont = 0;

/**
 * @type {'parado' | 'rodando'}
 */
let estado = 'parado';

botaoIniciar.addEventListener("click", () => executa('iniciar'));
botaoPausar.addEventListener("click", () => executa('pausar'));
botaoReiniciar.addEventListener("click", () => executa('reiniciar'));

/**
 *
 * @param {'iniciar' | 'pausar' | 'reiniciar' | 'tick'} acao
 */
function executa(acao){
  console.log('Estou no estado', estado, 'e executando a acao',acao);

  switch(estado) {

    case 'parado':

      switch(acao){
        case 'iniciar':
          estado = 'rodando'
          criarTimer();
          break;
        case 'reiniciar':
          estado = 'parado'
          cont = 0;
          break;
      }

    break;

    case 'rodando':

      switch(acao){
        case 'pausar':
          estado = 'parado'
          break;
      }

      switch(acao){
        case 'reiniciar':
          estado = 'parado'
          destruirTimer()
          cont = 0;
          atualizarView();
          break;

        case 'tick':
          cont += 100;
          atualizarView();
          break
      }


    break;

  }
  console.log('Estou no estado', estado, 'e executei a acao',acao, cont)
}

let timer;
function criarTimer() {
  timer = setInterval(()=> executa('tick'), 100);
}

function destruirTimer(){
  clearInterval(timer)
}

function atualizarView (){
  output.innerHTML = `${(cont / 1000).toFixed(1)}s`.replace('.', ',');
}

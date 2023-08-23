const botaoAdicionar = document.querySelector('#botao-adicionar');
const tarefas = document.querySelector('#tarefas');

botaoAdicionar.addEventListener("click", ()=> adicionarLinha())

function adicionarLinha() {
  const linha = document.createElement('div');
  linha.classList.add('row');
  linha.classList.add('mt-2');
  linha.innerHTML =
  `<div class="col d-flex align-items-center">
    <input
      type="text"
      class="flex-grow-1 form-control"
      placeholder="Digite aqui a tarefa..."
    />
    <div class="form-check form-switch ms-2 me-1">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        style="width: 3em; height: 1.5em;"
      />
    </div>
    <button
      type="button"
      class="btn btn-danger text-center"
    >
      <i class="bi bi-trash-fill"></i>
    </button>
  </div>`;
  tarefas.appendChild(linha)

  const botaoExcluir = linha.querySelector('button.btn.btn-danger.text-center');
  botaoExcluir.addEventListener('click', () =>{
    tarefas.removeChild(linha);
  })

  const switchFinalizada = linha.querySelector('input[type="checkbox"]');
  const inputText = linha.querySelector('input[type="text"]');

  switchFinalizada.addEventListener("change",(event) => {
    inputText.disabled = event.target.checked;


  })

  inputText.focus()
}

const promessa = fetch('http://localhost:3000/evento', {
  method: 'GET',
}).then(res => res.json()).then(obj=>{
  const data = new Date(obj.data);
  console.log(data.getDate());
  const msAteNatal = data.getTime() - Date.now();
  console.log(msAteNatal);
})

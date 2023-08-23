function contagemRegressiva(){
const promessa = fetch('http://localhost:3000/evento', {
  method: 'GET',
}).then(res => res.json()).then(obj=>{
  const data = new Date(obj.data);
  console.log(data);
  const msAteAnoNovo = data.getTime() - Date.now();

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const dias = Math.floor (msAteAnoNovo / diaEmMs);
  const horas = Math.floor((msAteAnoNovo % diaEmMs) / horaEmMs);
  const minutos = Math.floor ((msAteAnoNovo % horaEmMs) / minutosEmMs);
  const segundos = Math.floor ((msAteAnoNovo % minutosEmMs) / 1000);

  document.getElementById('dias').innerHTML = `${dias}`
  document.getElementById('horas').innerHTML = `${horas}`
  document.getElementById('minutos').innerHTML = `${minutos}`
  document.getElementById('segundos').innerHTML = `${segundos}`
  ,1000
  })
}

setInterval(contagemRegressiva, 1000)

import './style.css'


document.querySelector('#app').innerHTML = `
  <div>
  <h1>Hola mundo!</h1>
  <a href="https://vitejs.fev/guide/features.htlm" target="=_blank">Vite</a>
  </div>
`;

setupCounter(document.querySelector('#counter'));

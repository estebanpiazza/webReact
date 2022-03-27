import './App.css';
function mostrarTitulo(tit) {
  return (<h1>
    {tit}
  </h1>);
}

function retornarAleatorio() {
  return Math.trunc(Math.random() * 10);
}

function App() {
  const siglo = 21
  const persona = {
    nombre: 'Esteban',
    edad: 29,
    
  }
  const buscadores = ['http://www.google.com',
    'http://www.bing.com',
    'http://www.yahoo.com'];
  return (
    <>
      <h1>Título nivel 1</h1>
      {/* hay que cerrar los que no tienen cierre de esta forma */ }
      <hr /> 
      <p>Estamos en el siglo {siglo}</p>
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <h3>Llamada a un método</h3>
      <p>Un valor aleatorio llamando a un método.</p>
      {retornarAleatorio()}
      <h3>Calculo inmediato de expresiones</h3>
      3 + 3 = {3 + 3}
    
    
  
    <br/>
      <a href={buscadores[0]}>Google</a><br />
      <a href={buscadores[1]}>Bing</a><br />
      <a href={buscadores[2]}>Yahoo</a><br />

      {mostrarTitulo('Hola Mundo')}
      {mostrarTitulo('Fin')}
      <h1 className="recuadro">Titulo 1</h1>
    </>
    
  );
}

export default App;
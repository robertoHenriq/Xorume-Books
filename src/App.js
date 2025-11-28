import './App.css';
import Logo from './componentes/logo'
import Sacola from './imagens/sacola.svg'
import Perfil from './imagens/perfil.svg'


function App() {

  const textoOpcao = [
    'Categoria', 
    'Minha Estante Xorume',
    'Estrelas'
  ]

  const icones = [
    Sacola,
    Perfil
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <ul className='opcoes'> 
          
          {textoOpcao.map( (texto) => (
          <li className='opcao'>
          <p>{texto}</p></li>))}
          
    
          <ul className='icones'>
            {icones.map( (icone) => (
              <li className='icone'><img src={icone} alt='icone'></img></li>
            ))
            }
            
            </ul>
          
        </ul>
      </header>
      
    </div>
  );
}

export default App;

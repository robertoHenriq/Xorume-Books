import Busca from './componentes/busca/Index';
import Header from './componentes/header';
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 255, 0.381);

`

function App() {

    return (
    <AppContainer>
      <Header></Header>
      <Busca />
    </AppContainer>
  );
}

export default App;

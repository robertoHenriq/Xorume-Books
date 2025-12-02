import Input from './componentes/input/Index';
import Header from './componentes/header';
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

    background-color: rgba(0, 0, 255, 0.381);

`

const Conteudo = styled.main`
    flex: 1; 
`;

function App() {

    return (
    <AppContainer>
      <Header></Header>
      <Conteudo>
      <Input />
      </Conteudo>
      <footer><p>@Site criado por José Roberto</p></footer>
    </AppContainer>
      
);
}

export default App;

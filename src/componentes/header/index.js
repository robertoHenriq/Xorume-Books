import Icone from '../../componentes/iconeHeader';
import Logo from '../../componentes/logo'
import Opcoes from '../../componentes/opcoesHeader';
import styled from 'styled-components'

const HeaderComponent = styled.div`
    background-color: white;
    justify-content: center;
`

const Selecionaveis = styled.div`
    display: flex;
    justify-content: center;
    
`

const Header = () =>{
    return(
        <HeaderComponent>
            <Logo></Logo>
        <Selecionaveis>
            <Opcoes></Opcoes>
            <Icone></Icone>
        </Selecionaveis>
       </HeaderComponent>
    )
}
export default Header
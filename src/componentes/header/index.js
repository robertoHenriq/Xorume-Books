import Icone from '../../componentes/iconeHeader';
import Logo from '../../componentes/logo'
import Opcoes from '../../componentes/opcoesHeader';
import './Header.css'


const Header = () =>{
    return(
        <header className='App-header'>
        <Logo></Logo>
        <div className='selecionaveis'>
        <Opcoes></Opcoes>
        <Icone></Icone>
        </div>
       </header>
    
    )
}
export default Header
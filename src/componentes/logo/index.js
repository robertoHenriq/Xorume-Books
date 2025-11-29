import logo from '../../imagens/logo.png'
import Styled from 'styled-components'

const LogoComponente = Styled.div`
 text-align: center;

img{
    width: 40px;
  height: 40px;
}
`

function Logo(){
    return(
        <LogoComponente>
            <img src={logo} alt='logo'></img>
            <p><strong>Livros</strong> do Xorume</p>
        </LogoComponente>
    );
}

export default Logo;
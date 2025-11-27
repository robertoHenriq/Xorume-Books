import './estilo.css'
import logo from '../../imagens/logo.png'


function Logo(){
    return(
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p>Livros do Xorume</p>
        </div>
    );
}

export default Logo;
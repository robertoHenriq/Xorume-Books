import './estilo.css'
import logo from '../../imagens/logo.png'


function Logo(){
    return(
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Livros</strong> do Xorume</p>
        </div>
    );
}

export default Logo;
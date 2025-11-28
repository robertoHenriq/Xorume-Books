import Sacola from '../../imagens/sacola.svg'
import Perfil from '../../imagens/perfil.svg'
import './Icone.css'

const Icone = () =>{

    const icones = [
        Sacola,
        Perfil
    ]

    return(

        <ul className='icones'>
            {icones.map(
                icone => <li className='icone'><img src={icone}></img></li>
            )}

        </ul>

    );
}
export default Icone;
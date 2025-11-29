import Sacola from '../../imagens/sacola.svg'
import Perfil from '../../imagens/perfil.svg'
import Styled from 'styled-components' 

const Icones = Styled.ul`
    display: flex;
    align-items: center;
    padding: 0%;
`

const IconeComponente = Styled.li`
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
`

const Icone = () =>{

    const icones = [
        Sacola,
        Perfil
    ]

    return(

        <Icones>
            {icones.map(
                icone => <IconeComponente><img src={icone}></img></IconeComponente>
            )}

        </Icones>

    );
}
export default Icone;
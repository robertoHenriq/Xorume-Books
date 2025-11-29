import CampoTexto from "../campoTexto"
import Styled from "styled-components" 

const BuscarContainer = Styled.section`
        color: #FFF;
        text-align: center;
        padding: 0px 0;
        height: 270px;
        width: 100%;`

const Busca= () =>{
    return(
        <BuscarContainer>
            <h2>Busque no xorume</h2>
            <CampoTexto placeholder="Buscar o xorume"></CampoTexto>
        </BuscarContainer>
    )
}

export default Busca
import CampoTexto from "../campoTexto"
import Styled from "styled-components" 
import { useState } from "react"

const InputContainer = Styled.section`
        color: #FFF;
        text-align: center;
        padding: 0px 0;
        height: 270px;
        width: 100%;`

const Input = () =>{
    const [textoDigitado, setTextoDigitado] = useState('')

    return(
        <InputContainer>
            <h2>Busque no xorume</h2>
            <CampoTexto 
                placeholder="Buscar o xorume" 
                onBlur={evento => setTextoDigitado(evento.target.value)}
            />
            <p>{textoDigitado}</p> 
        </InputContainer>
    );
}

export default Input
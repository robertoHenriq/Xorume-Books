import CampoTexto from "../campoTexto"
import Styled from "styled-components" 
import { useState } from "react"
import { Livros } from "./DadosInput"

const InputContainer = Styled.section`
        color: #FFF;
        text-align: center;
        padding: 0px 0;
        height: 270px;
        width: 100%;
        `

const LivroBuscado = Styled.div`
    padding: 0px;
    margin: 0px;
    justify-content: center;
`


const Input = () =>{
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    console.log(livrosPesquisados)


    return(
        <InputContainer>
            <h2>Busque no xorume</h2>
            <CampoTexto 
                placeholder="Buscar o xorume" 
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = Livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa) 
                    }
                }
            /> 
            { livrosPesquisados.map( livro =>(
                <LivroBuscado>
                    <p>{livro.nome}</p>
                    <img src={livro.src}></img>
                </LivroBuscado>
            )) }
        </InputContainer>
    );
}

export default Input
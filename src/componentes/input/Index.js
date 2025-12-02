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

   const LivroItem = Styled.div`
    // ... todo o seu estilo de borda, padding, hover, etc. do livro individual ...
    background-color: #485098ff;
    border: 1px solid #333;
    border-radius: 10px;
    padding: 16px;
    // Removi a maioria das props de layout (flex-direction, display) 
    // pois o container vai gerenciá-las.
    
    // Deixei apenas o essencial para o item:
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 260px; // Largura do item individual
    
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    // ... estilos internos (p, img) ...
    p { /* ... */ }
    img { /* ... */ }
    &:hover { /* ... */ }
`;

// NOVO: Container para agrupar e organizar os resultados em várias colunas
const ResultadoContainer = Styled.div`
    display: grid; 
    // Cria colunas repetidas, ajustando-se para caber o máximo de itens
    // que tenham no mínimo 200px de largura.
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    gap: 20px; // Espaçamento entre os itens
    margin-top: 20px;
    width: 90%; // Ocupa a maior parte da largura
    max-width: 1200px; // Limita a largura máxima
    padding: 0 20px;
    margin-left: auto; // Centraliza o container
    margin-right: auto; // Centraliza o container
`;


    const Input = () =>{
        const [livrosPesquisados, setLivrosPesquisados] = useState([])

        console.log(livrosPesquisados)


        return(
            <InputContainer>
                <h2>Busque no xorume</h2>
                <CampoTexto 
                    placeholder="Buscar o xorume" 
                    onKeyDown={evento => {
                        const textoDigitado = evento.target.value
                        const resultadoPesquisa = Livros.filter(livro => livro.nome.includes(textoDigitado))
                        setLivrosPesquisados(resultadoPesquisa) 
                        }
                    }
                /> 
                <ResultadoContainer> 
                { livrosPesquisados.map( livro =>(
                    <LivroItem key={livro.nome}> 
                        <p>{livro.nome}</p>
                        <img src={livro.src} alt={`Capa do livro ${livro.nome}`}></img>
                    </LivroItem>
                )) }
                </ResultadoContainer>
            </InputContainer>
        );
    }

    export default Input
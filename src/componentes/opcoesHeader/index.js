import Styled from 'styled-components'

const OpcoesComponentes = Styled.ul`
    display: flex;
    justify-content: center;
`
const OpcaoComponente = Styled.li`
    font-size: 15px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = () =>{
    
    const textoOpcao = [
    'Categoria', 
    'Minha Estante Xorume',
    'Estrelas'
  ]

    return (
        <OpcoesComponentes>
            {textoOpcao.map(
                texto =>(
                    <OpcaoComponente><p>{texto}</p></OpcaoComponente>
                )
            )}
        </OpcoesComponentes>
    );
}

export default Opcoes;
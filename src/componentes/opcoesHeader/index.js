import './Opcoes.css'

const Opcoes = () =>{
    
    const textoOpcao = [
    'Categoria', 
    'Minha Estante Xorume',
    'Estrelas'
  ]

    return (
        <ul className="opcoes">
            {textoOpcao.map(
                texto =>(
                    <li className="opcao"><p>{texto}</p></li>
                )
            )}
        </ul>
    );
}

export default Opcoes;
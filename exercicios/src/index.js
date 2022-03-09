import React from 'react'
import ReactDom from 'react-dom'

// import Primeiro from './componentes/Primeiro'    //Eu posso chamar esse arquivo de qualquar nome, desde que mantenha o caminho do arquivo
//o componente não pode ter letra minuscula quando for chamado, pois não irá ser renderizado
//O nome do arquivo não tem problema ter letra maiuscula ou minuscula.
// const elemento = <h1>React2 </h1>

// import BomDia from './componentes/BomDia'

// import {BoaTarde, BoaNoite } from './componentes/Multiplos'
// import Multi from './componentes/Multiplos'
// import Multi, {BoaTarde} from './componentes/Multiplos'
// import BoaTarde, { BoaNoite } from './componentes/Multiplos' //Eu posso usar esse BoaTarde para fora se no arquivo Multiplos.jsx estiver como export default BoaTarde
import Saudacao from './componentes/Saudacao'

ReactDom.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João" />
    </div>,
    document.getElementById('root')
)
// ReactDom.render(
//     <div>
//         <BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>,
//     document.getElementById('root')
// )

// ReactDom.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <Multi.BoaNoite nome="Bia" />
//     </div>,
//     document.getElementById('root')
// )

// ReactDom.render(
//     <div>
//         <Multi.BoaTarde nome="Ana" />
//         <BoaNoite nome="Bia" />
//     </div>,
//     document.getElementById('root')
// )

//passando um parametro
// ReactDom.render(<BomDia nome="Guilherme"/>, document.getElementById('root'))


// ReactDom.render(elemento, document.getElementById('root'))
// ReactDom.render(<h1>React</h1>, document.getElementById('root'))
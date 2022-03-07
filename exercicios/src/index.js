import React from 'react'
import ReactDom from 'react-dom'

// import Primeiro from './componentes/Primeiro'    //Eu posso chamar esse arquivo de qualquar nome, desde que mantenha o caminho do arquivo
//o componente não pode ter letra minuscula quando for chamado, pois não irá ser renderizado
//O nome do arquivo não tem problema ter letra maiuscula ou minuscula.
// const elemento = <h1>React2 </h1>

import BomDia from './componentes/BomDia'


//passando um parametro
ReactDom.render(<BomDia nome="Guilherme"/>, document.getElementById('root'))


// ReactDom.render(elemento, document.getElementById('root'))
// ReactDom.render(<h1>React</h1>, document.getElementById('root'))
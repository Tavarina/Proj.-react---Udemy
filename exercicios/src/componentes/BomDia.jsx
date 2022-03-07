// import React, {Fragment} from 'react'
import React from 'react'

export default props =>[
         <h1 key='h1'>Bom dia {props.nome}!!</h1>,
     <h2 key='h2'>Até breve!!</h2>
] //se vc usar um array [] ele vai te dar um alert no console do browser para que vc utilize uma chave.



// export default props =>
// <Fragment>
//      <h1>Bom dia {props.nome}!!</h1>
//      <h2>Até breve!!</h2>
// </Fragment>


//() - é substituido por props(significa que são as propriedades passadas para esse componente)
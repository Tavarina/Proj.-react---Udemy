import React from "react"
import { childrenWithProps } from "../utils/utils"
// import Filho from "./Filho"




export default props =>
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>

{childrenWithProps(props)}
        {/* {props.children}  */}
        {/* {
        React.Children.map(props.children, child => {
            return React.cloneElement(child, {
                ...props, ...child.props
            })

        })     
        // React.cloneElement(props.children, {
        //     ...props, ...props.children.props})} {/*Peguei as minhas propriedades e as propriedades do pai / essa é uma função q só funciona com um unico componente*/}
    
         {/* <Filho nome="Pedro" sobrenome={props.sobrenome} />
        <Filho {...props} />
        <Filho  {...props} nome="Carla" /> */
        }
    </ul>

</div>
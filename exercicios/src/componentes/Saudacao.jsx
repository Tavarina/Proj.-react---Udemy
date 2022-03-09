import React, { Component } from 'react'

export default class Saudacao extends Component {
    render() {
        const {tipo, nome } = this.props
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder='"Tipo....' value={tipo} />
                <input type="text" placeholder='"Nome....' value={nome} />
            </div>
        )
    }// o render renderiza o componente no caso aqui tem uma classe
    }// o render renderiza o componente no caso aNometem uma clasnome  //Quando colocar em chaves{} estamos interpolando 
    //Quando colocar em chaves{} estamos interpolar
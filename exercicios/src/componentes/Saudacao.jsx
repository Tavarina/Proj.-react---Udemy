import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome

        // tipo: "Fala",
        // nome: "Pedro"
    }
    setTipo(e) {
        // let i =1
        // setInterval(()=> {
        //     this.setState({ tipo: ++i})
        // }, 1000)
        this.setState({ tipo: e.target.value})
        // this.setState({ tipo: "boi"})
        // this.setState({ tipo: e.target.value})
        // this.props.tipo = e.target.value
        // console.log(e.target.value)
    }
    setNome(e) {
        this.setState({ nome: e.target.value})
    }
        render() {
            const {tipo, nome } = this.state
            return (
                <div>
                    <h1>{tipo} {nome}!</h1>
                    <hr />
                    <input type="text" placeholder='"Tipo....' value={tipo} onChange={e => this.setTipo(e)} />
                    <input type="text" placeholder='"Nome....' value={nome} onChange={e => this.setNome(e)} />
                </div>
            )
        }
    }




// export default class Saudacao extends Component {
//     render() {
//         const {tipo, nome } = this.props
//         return (
//             <div>
//                 <h1>{tipo} {nome}!</h1>
//                 <hr />
//                 <input type="text" placeholder='"Tipo....' value={tipo} />
//                 <input type="text" placeholder='"Nome....' value={nome} />
//             </div>
//         )
//     }// o render renderiza o componente no caso aqui tem uma classe
//     }// o render renderiza o componente no caso aNometem uma clasnome  //Quando colocar em chaves{} estamos interpolando 
    //Quando colocar em chaves{} estamos interpolar
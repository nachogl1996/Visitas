import  React from 'react';
export default class ClienteElement extends React.Component {
    constructor(props){
        super(props);
        this.seleccion = this.seleccion.bind(this);
    }
    seleccion(){
        let cliente = this.props.cliente;
        let name = cliente["name"];
        this.props.manejador(name, this.props.mykey);
    }
    render() {
        let cliente = this.props.cliente;
        let name = cliente["name"];
        let cif = cliente["cif"];
        return(
           <button onClick={ this.seleccion }><li key={"Clienten"+this.props.mykey}>{ name }   CIF: { cif }</li></button>
        );
    }
}
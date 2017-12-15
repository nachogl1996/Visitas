import  React from 'react';
export default class VendedorElement extends React.Component {
    constructor(props){
        super(props);
        this.seleccion = this.seleccion.bind(this);
    }
    seleccion(){
        let vendedor = this.props.vendedor;
        let name = vendedor["fullname"];
        this.props.manejador(name, this.props.mykey);
    }
    render() {
        let vendedor = this.props.vendedor;
        let name = vendedor["fullname"];
        return(
            <button onClick={ this.seleccion }><li key={"Vendedorn"+this.props.indice}>{ name }</li></button>
        );
    }
}
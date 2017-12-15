import  React from 'react';
import ClienteElement from "./ClienteElement";
import Jquey from 'jquery';
const TOKEN = "14457b646146cf31a40d";
export default class Clientes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            indice: 0,
            clientes: [{name: "hola", cif: "912812"}],
            cliente: {name: "hola", cif: "912812"},
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.modificar = this.modificar.bind(this);
        this.filtrar = this.filtrar.bind(this);
    }
    modificar(datos){
        let array1 = [{name: "", cif: "cualquiera"}];
        let array = array1.concat(datos);
        this.setState({
            indice: this.props.indice,
            clientes: array,
            cliente: array[this.state.indice],
        });
    }
    filtrar(cliente, indice){
        this.setState({
            indice: indice,
            cliente: this.state.clientes[indice],
        });
        this.props.manejador(cliente, indice);
    }
    componentDidMount(){
        let url = "https://dcrmt.herokuapp.com/api/customers?token="+TOKEN;
        let respuesta = Jquey.ajax({
            url: url
        })
            .fail(function () {
                console.log("ERROR al descargar clientes");
            })
            .done(function( data ) {
                this.modificar(data)
            }.bind(this));
    }
    render() {
        let clientelement = this.state.clientes.map((cliente, indice) => {
            return(<div key={"cliente"+indice}><ClienteElement cliente={ cliente } mykey={indice} manejador= { this.filtrar }/></div>);
        });
        return(
            <div>
                <h4>Cliente:</h4>
                <ul>
                    { clientelement }
                </ul>
            </div>
        );
    }
}
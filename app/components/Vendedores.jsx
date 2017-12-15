import  React from 'react';
import VendedorElement from "./VendedorElement";
import Jquey from 'jquery';
const TOKEN = "14457b646146cf31a40d";
export default class Vendedores extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            indice: 0,
            vendedores: [{fullname: "hola", cif: "912812"}],
            vendedor: {fullname: "hola", cif: "912812"},
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.modificar = this.modificar.bind(this);
        this.filtrar = this.filtrar.bind(this);
    }
    modificar(datos){
        let array1 = [{fullname: ""}];
        let array = array1.concat(datos);
        this.setState({
            indice: this.props.indice,
            vendedores: array,
            vendedor: array[this.state.indice],
        });
    }
    filtrar(vendedor, indice){
        this.setState({
            indice: indice,
            vendedor: this.state.vendedores[indice]
        });
        this.props.manejador(vendedor, indice);
    }
    componentDidMount(){
        let url = "https://dcrmt.herokuapp.com/api/salesmen?token="+TOKEN;
        let respuesta = Jquey.ajax({
            url: url
        })
            .fail(function () {
                console.log("ERROR al descargar vendedores");
            })
            .done(function( data ) {
                this.modificar(data)
            }.bind(this));
    }
    render() {
        let vendedorelement = this.state.vendedores.map((vendedor, indice) => {
            return(<div key={"vendedor"+indice}><VendedorElement vendedor={ vendedor } mykey={indice} manejador= { this.filtrar }/></div>);
        });
        return(
            <div>
                <h4>Vendedor:</h4><ul>{ vendedorelement }</ul>
            </div>
        );
    }
}
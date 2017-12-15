import  React from 'react';
import Vendedores from "./Vendedores";
import Clientes from "./Clientes"
export default class Filtros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cliente: "",
            indicecliente: 0,
            vendedor: "",
            indicevendedor: 0,
        };
        this.filtrar = this.filtrar.bind(this);
        this.cancelar = this.cancelar.bind(this);
        this.filtrocliente = this.filtrocliente.bind(this);
        this.filtrovendedor = this.filtrovendedor.bind(this);
    }
    filtrar(){
        this.props.manejador(this.state.cliente, this.state.vendedor);
    }
    cancelar(){
        this.setState({
            cliente: "",
            indicecliente: 0,
            vendedor: "",
            indicevendedor: 0,
        });
        this.props.manejador("","");
    }
    filtrovendedor(vendedor, indice){
        this.setState({
            vendedor: vendedor,
            indicevendedor: indice,
        });
    }
    filtrocliente(cliente, indice){
        this.setState({
            cliente: cliente,
            indicecliente: indice,
        });
    }
    render() {
        return(
            <div key={"Filtros"}>
                <h3>Filtros:</h3>
                <Vendedores indice= { this.state.indicevendedor } manejador= { this.filtrovendedor }/>
                <Clientes indice= { this.state.indicecliente } manejador= { this.filtrocliente }/>
                <button onClick={ this.filtrar }>Filtrar</button>
                <button onClick={ this.cancelar }>Cancelar</button>
            </div>
        );
    }
}
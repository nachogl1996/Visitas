import React from 'react';
import './../assets/scss/main.scss';
import { visits } from "./../assets/mock.data";
import VisitList from "./VisitList";
import Detail from "./Detail";
import Jquey from 'jquery';
import Filtros from "./Filtros";
const TOKEN = "14457b646146cf31a40d";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indice: 0,
            visits: visits,
            visit: visits[0],
            cliente: "",
            vendedor: "",
        };
        this.appClick = this.appClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.modificar = this.modificar.bind(this);
        this.filtrar = this.filtrar.bind(this);
    }
    modificar(datos){
        this.setState({
            visits: datos,
            visit: this.state.visits[this.state.indice],
        });
    }
    componentDidMount(){
        let url = "https://dcrmt.herokuapp.com/api/visits/flattened?token="+TOKEN+"&customer="+this.state.cliente+"&salesman="+this.state.vendedor;
        let respuesta = Jquey.ajax({
            url: url
        })
            .fail(function () {
                console.log("ERROR");
            })
            .done(function( data ) {
                this.modificar(data)
            }.bind(this));

    }
    appClick(indice) {
        console.log(indice);
        console.log(this.state.visit["id"]);
        this.setState({
            indice: indice,
            visit: this.state.visits[indice],
        });
    }
    filtrar(cliente, vendedor){
        let clienteurl = encodeURI(cliente);
        let vendedorurl = encodeURI(vendedor)
        this.setState({
            cliente: clienteurl,
            vendedor: vendedorurl,
            indice: 0,
            visit: undefined,
        });
        let url = "https://dcrmt.herokuapp.com/api/visits/flattened?token="+TOKEN+"&customer="+clienteurl+"&salesman="+vendedorurl;
        let respuesta = Jquey.ajax({
            url: url
        })
            .fail(function () {
                console.log("ERROR");
            })
            .done(function( data ) {
                this.modificar(data)
            }.bind(this));
        //this.render();
    }

    render() {

        return (<div>
            <h2 id="heading">Practica 6</h2>
            <Filtros manejador={ this.filtrar }/>
            <VisitList visits={ this.state.visits } manejadorVisitsClick={ this.appClick }/>
            <Detail visita={this.state.visit} mykey={this.state.indice}/>
            </div>
        );

    }

}


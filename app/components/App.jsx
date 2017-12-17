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
            idfabrica: "",
            fechadesde: "",
            fechahasta: "",
            fav: true,
            mias: false,
        };
        this.appClick = this.appClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.modificar = this.modificar.bind(this);
        this.filtrar = this.filtrar.bind(this);
    }
    modificar(datos){
        this.setState({
            visits: datos,
            visit: datos[this.state.indice],
        });
    }
    componentDidMount(){
        let favorito = "";
        if(this.state.fav){
            favorito = "1";
        }
        let url = "https://dcrmt.herokuapp.com/api/visits/flattened?token="+TOKEN+"&dateafter="+this.state.fechadesde+"&datebefore="+this.state.fechahasta+"&customer="+this.state.cliente+"&salesman="+this.state.vendedor+"&companyid="+this.state.idfabrica+"&favourites="+favorito;
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
        this.setState({
            indice: indice,
            visit: this.state.visits[indice],
        });
    }
    filtrar(cliente, vendedor, idfabrica, fechadesde, fechahasta, fav, mias){
        let clienteurl = encodeURI(cliente);
        let vendedorurl = encodeURI(vendedor);
        console.log(fechadesde);
        this.setState({
            cliente: clienteurl,
            vendedor: vendedorurl,
            indice: 0,
            visit: undefined,
            idfabrica: idfabrica,
            fechadesde: fechadesde,
            fav: fav,
            mias: mias
        });
        let favorito = "";
        if(fav){
            favorito = "1";
        }
        let urlaux = "https://dcrmt.herokuapp.com/api/visits/flattened?token=";
        if(mias){
            urlaux = "https://dcrmt.herokuapp.com/api/users/tokenOwner/visits/flattened?token=";
        }
        let url = urlaux+TOKEN+"&dateafter="+fechadesde+"&datebefore="+fechahasta+"&customer="+clienteurl+"&salesman="+vendedorurl+"&companyid="+idfabrica+"&favourites="+favorito;
        console.log(url);
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

    render() {

        return (<div>
            <Filtros manejador={ this.filtrar }/>
            <VisitList visits={ this.state.visits } manejadorVisitsClick={ this.appClick }/>
            <Detail visita={this.state.visit} mykey={this.state.indice}/>
            </div>
        );

    }

}


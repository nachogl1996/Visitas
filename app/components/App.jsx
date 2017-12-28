import React from 'react';
import './../assets/scss/main.scss';
import VisitList from "./VisitList";
import Detail from "./Detail";
import Jquey from 'jquery';
import Filtros from "./Filtros";
import  { connect } from 'react-redux';
import { cargarvisitas, cambiaraniodesde, cambiaraniohasta, cambiarfav, cambiarindice, cambiarindicefabricas, cambiarmesdesde, cambiarmeshasta, cambiarmias, cambiarvalorc, cambiarvalorv, cargarclientes, cargarclientesescritos, cargarfabricas, cargarvendedores, cargarvendedoresescritos } from "./../reducers/actions";
const TOKEN = "14457b646146cf31a40d";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.appClick = this.appClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.modificar = this.modificar.bind(this);
        this.filtrar = this.filtrar.bind(this);
        this.favclick = this.favclick.bind(this);
        this.filtrocliente = this.filtrocliente.bind(this);
        this.filtrovendedor = this.filtrovendedor.bind(this);
        this.filtrofabrica = this.filtrofabrica.bind(this);
        this.filtrodesde = this.filtrodesde.bind(this);
        this.filtrodesdemes = this.filtrodesdemes.bind(this);
        this.filtrohasta = this.filtrohasta.bind(this);
        this.filtrohastames = this.filtrohastames.bind(this);
        this.filtromias = this.filtromias.bind(this);
        this.filtrofav = this.filtrofav.bind(this);
        this.compararv = this.compararv.bind(this);
        this.changev = this.changev.bind(this);
        this.compararc = this.compararc.bind(this);
        this.changec = this.changec.bind(this);
        this.escribirfecha = this.escribirfecha.bind(this);
    }
    compararc(valor){
        return(valor.label.toLowerCase().indexOf(this.props.valorc.toLowerCase()) !== -1);
    }
    changec(valor){
        this.props.dispatch(cambiarvalorc(valor.target.value));
        let clientelement = this.props.clientes.filter(this.compararc);
        this.props.dispatch(cargarclientesescritos(clientelement));
    }
    filtrocliente(valor){
        this.props.dispatch(cambiarvalorc(valor));
    }
    compararv(valor){
        return(valor.label.toLowerCase().indexOf(this.props.valorv.toLowerCase()) !== -1);
    }
    changev(valor){
        this.props.dispatch(cambiarvalorv(valor.target.value));
        let vendedorelement = this.props.vendedores.filter(this.compararv);
        this.props.dispatch(cargarvendedoresescritos(vendedorelement));
    }
    filtrovendedor(valor, vendedor) {
        this.props.dispatch(cambiarvalorv(valor));
    }
    modificar(datos){
        this.props.dispatch(cargarvisitas(datos));
    }
    componentDidMount(){
        var idfabrica = this.props.fabricas[this.props.indicefabrica].id;
        let clienteurl = encodeURI(this.props.valorc);
        let vendedorurl = encodeURI(this.props.valorv);
        let fechadesde = this.escribirfecha("01", this.props.mesdesde, this.props.aniodesde);
        let fechahasta = this.escribirfecha("28", this.props.meshasta, this.props.aniohasta);
        let favorito = "";
        if(this.props.fav){
            favorito = "1";
        }
        let url = "https://dcrmt.herokuapp.com/api/visits/flattened?token="+TOKEN+"&dateafter="+fechadesde+"&datebefore="+fechahasta+"&customer="+clienteurl+"&salesman="+vendedorurl+"&companyid="+idfabrica+"&favourites="+favorito;
        let respuesta = Jquey.ajax({
            url: url
        })
            .fail(function () {
                console.log("ERROR");
            })
            .done(function( data ) {
                this.modificar(data)
            }.bind(this));
        let urlv = "https://dcrmt.herokuapp.com/api/salesmen?token="+TOKEN;
        let respuestav = Jquey.ajax({
            url: urlv
        })
            .fail(function () {
                console.log("ERROR al descargar vendedores");
            })
            .done(function( data ) {
                let array1 = [{fullname: ""}];
                let array = array1.concat(data);
                let vendedorelement = data.map((vendedor, indice) => {
                    return({ label: vendedor.fullname, indice: indice });
                });
                this.props.dispatch(cargarvendedores(vendedorelement));
                this.props.dispatch(cargarvendedoresescritos(vendedorelement));
            }.bind(this));
        let urlc = "https://dcrmt.herokuapp.com/api/customers?token="+TOKEN;
        let respuestac = Jquey.ajax({
            url: urlc
        })
            .fail(function () {
                console.log("ERROR al descargar clientes");
            })
            .done(function( data ) {
                let clientelement = data.map((cliente, indice) => {
                    return({ label: cliente.name, indice: indice });
                });
                this.props.dispatch(cargarclientes(clientelement));
                this.props.dispatch(cargarclientesescritos(clientelement));
            }.bind(this));
        let urlf = "https://dcrmt.herokuapp.com/api/companies?token="+TOKEN;
        let respuestaf = Jquey.ajax({
            url: urlf
        })
            .fail(function () {
                console.log("ERROR al descargar clientes");
            })
            .done(function( data ) {
                let array1 = [{name: "", id: ""}];
                let array = array1.concat(data);
                let fabricalement = array.map((fabrica, indice) => {
                    return({ name: fabrica.name, indice: indice, id: fabrica.id });
                });
                this.props.dispatch(cargarfabricas(fabricalement));
            }.bind(this));

    }
    appClick(indice) {
        this.props.dispatch(cambiarindice(indice));
    }
    escribirfecha(dia, mes, anio){
        var fecha = new Date();
        var anioactual = fecha.getFullYear();
        if(anio === "" && mes === ""){
            return "";
        } else {
            if(mes === ""){
                return anio+"-01-"+dia;
            } else {
                if(anio === ""){
                    return anioactual+"-"+mes+"-"+dia;
                } else {
                    return anio+"-"+mes+"-"+dia;
                }
            }
        }
    }
    filtrar(){
        var idfabrica = this.props.fabricas[this.props.indicefabrica].id;
        let fechadesde = this.escribirfecha("01", this.props.mesdesde, this.props.aniodesde);
        let fechahasta = this.escribirfecha("28", this.props.meshasta, this.props.aniohasta);
        let clienteurl = encodeURI(this.props.valorc);
        let vendedorurl = encodeURI(this.props.valorv);
        let favorito = "";
        if(this.props.fav){
            favorito = "1";
        }
        let urlaux = "https://dcrmt.herokuapp.com/api/visits/flattened?token=";
        if(this.props.mias){
            urlaux = "https://dcrmt.herokuapp.com/api/users/tokenOwner/visits/flattened?token=";
        }
        let url = urlaux+TOKEN+"&dateafter="+fechadesde+"&datebefore="+fechahasta+"&customer="+clienteurl+"&salesman="+vendedorurl+"&companyid="+idfabrica+"&favourites="+favorito;
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
    favclick(indice){
        let visita = this.props.visits[indice];
        let visid = visita.id;
        let fav = visita.favourite;
        let url = "";
        if (fav){
            url = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/"+visid+"?token="+TOKEN+"&_method=DELETE";
        } else {
            url = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/"+visid+"?token="+TOKEN+"&_method=PUT";
        }
        let respuesta = Jquey.ajax({url: url})
            .done(function( data ) {
                console.log(data);
                this.filtrar();
            }.bind(this));
    }
    filtrofabrica(indice){
        this.props.dispatch(cambiarindicefabricas(indice));
    }
    filtrodesdemes(mes){
        this.props.dispatch(cambiarmesdesde(mes));
    }filtrodesde(anio){
        this.props.dispatch(cambiaraniodesde(anio));
    }
    filtrohasta(anio){
        this.props.dispatch(cambiaraniohasta(anio));
    }filtrohastames(mes){
        this.props.dispatch(cambiarmeshasta(mes));
    }
    filtromias(mias){
        this.props.dispatch(cambiarmias(mias));
    }
    filtrofav(fav){
        this.props.dispatch(cambiarfav(fav));
    }
    render() {
        return (<div>
            <Filtros manejador={ this.filtrar } fabricas={ this.props.fabricas } valorv={ this.props.valorv } vendedores={ this.props.vendedores } vendedorescrito={ this.props.vendedoresescritos } manejadorchangev={ this.changev } valorc={ this.props.valorc } clientes={ this.props.clientes } clienteescrito={ this.props.clientesescritos } manejadorchangec={ this.changec } manejadorvendedor={ this.filtrovendedor } manejadorcliente={ this.filtrocliente } manejadorfabrica={ this.filtrofabrica } manejadorfav={ this.filtrofav } manejadormias={ this.filtromias } manejadordesde={ this.filtrodesde } manejadordesdemes={ this.filtrodesdemes } manejadorhasta={ this.filtrohasta } manejadorhastames={ this.filtrohastames } fav={ this.props.fav } mias={ this.props.mias } indicefabrica={ this.props.indicefabrica }/>
            <VisitList visits={ this.props.visits } manejadorVisitsClick={ this.appClick } manejadorfav={ this.favclick }/>
            <Detail visita={this.props.visits[this.props.indice]} mykey={this.props.indice}/>
            </div>
        );

    }

}
function mapStateToProps(state) {
    return {
        indice: state.indice,
        visits: state.visits,
        fav: state.fav,
        mias: state.mias,
        indicefabrica: state.indicefabrica,
        mesdesde: state.mesdesde,
        aniodesde:state.aniodesde,
        meshasta: state.meshasta,
        aniohasta:state.aniohasta,
        valorv: state.valorv,
        vendedores: state.vendedores,
        vendedoresescritos: state.vendedoresescritos,
        clientes: state.clientes,
        valorc: state.valorc,
        clientesescritos: state.clientesescritos,
        fabricas: state.fabricas
    };
}
export default connect(mapStateToProps)(App);



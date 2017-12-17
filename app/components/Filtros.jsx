import  React from 'react';
import Vendedores from "./Vendedores";
import Clientes from "./Clientes"
import { ButtonToolbar, Button, Panel, Col, Jumbotron } from 'react-bootstrap/lib';
import Fabricas from "./Fabricas";
import FechaDesde from "./FechaDesde";
import FechaHasta from "./FechaHasta";
import Checkfav from "./Checkfav";
export default class Filtros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cliente: "",
            indicecliente: 0,
            vendedor: "",
            indicevendedor: 0,
            idfabrica:"",
            indicefabrica: 0,
            mesdesde: "",
            aniodesde:"",
            meshasta: "",
            aniohasta:"",
            open: false,
            fav: true,
            mias: false,
        };
        this.filtrar = this.filtrar.bind(this);
        this.cancelar = this.cancelar.bind(this);
        this.filtrocliente = this.filtrocliente.bind(this);
        this.filtrovendedor = this.filtrovendedor.bind(this);
        this.filtrofabrica = this.filtrofabrica.bind(this);
        this.filtrodesde = this.filtrodesde.bind(this);
        this.filtrodesdemes = this.filtrodesdemes.bind(this);
        this.filtrohasta = this.filtrohasta.bind(this);
        this.filtrohastames = this.filtrohastames.bind(this);
        this.filtromias = this.filtromias.bind(this);
        this.filtrofav = this.filtrofav.bind(this);
    }
    filtrar(){
        var fecha = new Date();
        var anio = fecha.getFullYear();
        let mesdesde = this.state.mesdesde;
        let aniodesde = this.state.aniodesde;
        let fechadesde = "";
        if(aniodesde === "" && mesdesde === ""){
            fechadesde = "";
        } else {
            if(mesdesde === ""){
                fechadesde = aniodesde+"-01-01";
            } else {
                if(aniodesde === ""){
                    fechadesde = anio+"-"+mesdesde+"-01";
                } else {
                    fechadesde = aniodesde+"-"+mesdesde+"-01";
                }
            }
        }
        let meshasta = this.state.meshasta;
        let aniohasta = this.state.aniohasta;
        let fechahasta = "";
        if(aniohasta === "" && meshasta === ""){
            fechahasta = "";
        } else {
            if(meshasta === ""){
                fechahasta = aniohasta+"-01-31";
            } else {
                if(aniohasta === ""){
                    fechahasta = anio+"-"+meshasta+"-28";
                } else {
                    fechahasta = aniohasta+"-"+meshasta+"-28";
                }
            }
        }
        this.props.manejador(this.state.cliente, this.state.vendedor, this.state.idfabrica, fechadesde, fechahasta, this.state.fav, this.state.mias );
    }
    cancelar(){
        this.props.manejador("","", "","","",true, false);
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
    filtrofabrica(id, indice){
        this.setState({
            idfabrica: id,
            indicefabrica: indice,
        });
    }
    filtrodesdemes(mes){
        this.setState({
            mesdesde: mes,
        });
    }filtrodesde(anio){
        this.setState({
            aniodesde: anio,
        });
    }
    filtrohasta(anio){
        this.setState({
            aniohasta: anio,
        });
    }filtrohastames(mes){
        this.setState({
            meshasta: mes,
        });
    }
    filtromias(mias){
        this.setState({
            mias: mias,
        });
    }
    filtrofav(fav){
        this.setState({
            fav: fav,
        });
    }
    render() {
        return(
            <div key={"Filtros"}>
                <Jumbotron className="filtros">
                <ButtonToolbar>
                    <Button onClick={() => this.setState({ open: !this.state.open })}>
                        Filtros
                    </Button>
                    <Button bsStyle="success" onClick={ this.filtrar }>Filtrar</Button>
                    <Button bsStyle="danger" onClick={ this.cancelar }>Cancelar</Button>
                </ButtonToolbar>
                <Panel collapsible expanded={this.state.open} className="listelement">
                    <Vendedores indice= { this.state.indicevendedor } manejador= { this.filtrovendedor }/>
                    <Clientes indice= { this.state.indicecliente } manejador= { this.filtrocliente }/>
                    <Fabricas indice= { this.state.indicefabrica } manejador={ this.filtrofabrica }/>
                    <Checkfav misvisitas={ this.state.mias } fav={ this.state.fav } manejador={ this.filtrofav } manejador2={ this.filtromias }/>
                    <FechaDesde mes={ this.state.mesdesde} anio={ this.state.aniodesde } manejador={ this.filtrodesde } manejadormes={ this.filtrodesdemes }/>
                    <FechaHasta mes={ this.state.meshasta} anio={ this.state.aniohasta } manejador={ this.filtrohasta } manejadormes={ this.filtrohastames }/>
                </Panel>
                </Jumbotron>
            </div>
        );
    }
}
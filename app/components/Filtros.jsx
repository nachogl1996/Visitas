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
            open: false,
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
        this.changev = this.changev.bind(this);
        this.changec = this.changec.bind(this);
    }
    filtrar(){
        this.props.manejador();
    }
    cancelar(){
        this.filtrovendedor("", { label: "", indice: 0 });
        this.filtrocliente("", { label: "", indice: 0 });
        this.filtrofabrica({ name: "", indice: 0, id: "" }, 0);
        this.filtrodesdemes("");
        this.filtrohastames("");
        this.filtrohasta("");
        this.filtrodesde("");
        this.filtromias(false);
        this.filtrofav(true);
        this.props.manejador();
    }
    filtrovendedor(valor, vendedor){
        this.props.manejadorvendedor(valor, vendedor);
    }
    changev(valor){
        this.props.manejadorchangev(valor)
    }
    changec(valor){
        this.props.manejadorchangec(valor)
    }
    filtrocliente(cliente, indice){
        this.props.manejadorcliente(cliente,indice);
    }
    filtrofabrica(fabrica, indice){
        this.props.manejadorfabrica(fabrica,indice);
    }
    filtrodesdemes(mes){
       this.props.manejadordesdemes(mes);
    }
    filtrodesde(anio){
        this.props.manejadordesde(anio);
    }
    filtrohasta(anio){
        this.props.manejadorhasta(anio);
    }
    filtrohastames(mes){
       this.props.manejadorhastames(mes);
    }
    filtromias(mias){
        this.props.manejadormias(mias)
    }
    filtrofav(fav){
        this.props.manejadorfav(fav);
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
                    <Vendedores indice= { this.props.indicevendedor } manejador= { this.filtrovendedor } change={ this.changev } valorv={ this.props.valorv } vendedores={ this.props.vendedores } vendedorescrito={ this.props.vendedorescrito }/>
                    <Clientes indice= { this.props.indicecliente } manejador= { this.filtrocliente } change={ this.changec } valorc={ this.props.valorc } clientes={ this.props.clientes } clienteescrito={ this.props.clienteescrito }/>
                    <Fabricas indice= { this.props.indicefabrica } manejador={ this.filtrofabrica } fabricas={ this.props.fabricas }/>
                    <Checkfav misvisitas={ this.props.mias } fav={ this.props.fav } manejador={ this.filtrofav } manejador2={ this.filtromias }/>
                    <FechaDesde mes={ this.props.mesdesde} anio={ this.props.aniodesde } manejador={ this.filtrodesde } manejadormes={ this.filtrodesdemes }/>
                    <FechaHasta mes={ this.props.meshasta} anio={ this.props.aniohasta } manejador={ this.filtrohasta } manejadormes={ this.filtrohastames }/>
                </Panel>
                </Jumbotron>
            </div>
        );
    }
}
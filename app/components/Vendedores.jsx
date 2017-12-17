import  React from 'react';
import Autocomplete from 'react-autocomplete';
import Jquey from 'jquery';
import {  Button, Col, ControlLabel } from 'react-bootstrap/lib';
const TOKEN = "14457b646146cf31a40d";
export default class Vendedores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indice: 0,
            valor: "",
            vendedores: [{fullname: "hola", cif: "912812"}],
            vendedorescrito: [{fullname: "hola", cif: "912812"}],
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.modificar = this.modificar.bind(this);
        this.change = this.change.bind(this);
        this.selec = this.selec.bind(this);
        this.comparar = this.comparar.bind(this);
        this.borrar = this.borrar.bind(this);
    }
    modificar(datos){
        let array1 = [{fullname: ""}];
        let array = array1.concat(datos);
        let vendedorelement = datos.map((vendedor, indice) => {
            return({ label: vendedor.fullname, indice: indice });
        });
        this.setState({
            indice: this.props.indice,
            vendedores: vendedorelement,
            vendedorescrito: vendedorelement,
        });
    }
    borrar(){
        this.setState({
            indice: 0,
            clienteescrito: this.state.clientele,
            valor: "",
        });
        this.props.manejador("", 0);
    }
    comparar(valor){
        return(valor.label.toLowerCase().indexOf(this.state.valor.toLowerCase()) !== -1);
    }
    change(valor){
        let vendedorelement = this.state.vendedores.filter(this.comparar);
        this.setState({
            valor: valor.target.value,
            vendedorescrito: vendedorelement,
        });
    }
    selec(valor, vendedor){
        this.setState({
            valor: valor,
            indice: vendedor.indice,
        });
        this.props.manejador(vendedor.label, vendedor.indice);
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
    render(){
        let vendedorelement = this.state.vendedorescrito;
        return(
            <Col xs={6} md={3} key={"vendedores"}>
                <ControlLabel>Seleccione un vendedor</ControlLabel>
                <Autocomplete
                    items={ vendedorelement }
                    getItemValue={ (item) => item.label }
                    renderItem={(item, isHighlighted) =>
                        <div key={"cli"+item.indice } style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.label}
                        </div>
                    }
                    value={ this.state.valor }
                    onChange={ this.change }
                    onSelect={ this.selec }
                    renderMenu={children => (
                        <div className="menu" key={children.indice}>
                            {children}
                        </div>
                    )}
                />
                <Button onClick={ this.borrar } bsSize="small">Borrar</Button>
            </Col>
        );
    }
}
import  React from 'react';
import Jquey from 'jquery';
import { Button, Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import FabricaElement from "./FabricaElement";
const TOKEN = "14457b646146cf31a40d";
export default class Fabricas extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            indice: this.props.indice,
            fabricas: [{name: "Cualquiera", id: ""}],
            fabrica: {name: "Cualquiera", id: ""},
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.modificar = this.modificar.bind(this);
        this.selec = this.selec.bind(this);
    }
    componentDidMount(){
        let url = "https://dcrmt.herokuapp.com/api/companies?token="+TOKEN;
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
    modificar(datos){
        let array1 = [{name: "", id: ""}];
        let array = array1.concat(datos);
        let fabricalement = array.map((fabrica, indice) => {
            return({ name: fabrica.name, indice: indice, id: fabrica.id });
        });
        this.setState({
            fabricas: fabricalement,
            fabrica: fabricalement[this.state.indice],
        });
    }
    selec(valor){
        let indice = valor.target.value;
        let fabrica = this.state.fabricas[indice];
        this.setState({
            indice: indice,
            fabrica: fabrica,
        });
        this.props.manejador(fabrica.id, indice);
    }
    render(){
        let fabricaelement = this.state.fabricas.map((fabrica) => {
            return(<FabricaElement fabrica={ fabrica }/>);
        });
        return(
            <Col xs={12} md={4}>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Seleccione una fabrica</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" onClick={ this.selec }>
                        { fabricaelement }
                    </FormControl>
                </FormGroup>
            </Col>
        );
    }
}
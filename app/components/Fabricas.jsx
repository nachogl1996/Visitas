import  React from 'react';
import Jquey from 'jquery';
import { Button, Col, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import FabricaElement from "./FabricaElement";
const TOKEN = "14457b646146cf31a40d";
export default class Fabricas extends React.Component {
    constructor(props){
        super(props);
        this.selec = this.selec.bind(this);
    }
    selec(valor){
        let indice = valor.target.value;
        let fabrica = this.props.fabricas[indice];
        this.props.manejador(fabrica, indice);
    }
    render(){
        let fabricaelement = this.props.fabricas.map((fabrica) => {
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
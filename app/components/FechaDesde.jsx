import React from 'react';
import { Col, ControlLabel, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
export default class FechaDesde extends React.Component {
    constructor(props) {
        super(props);
        this.selecm = this.selecm.bind(this);
        this.seleca = this.seleca.bind(this);
    }
    selecm(valor) {
        let mes = valor.target.value;
        this.props.manejadormes(mes);
    }
    seleca(valor) {
        let anio = valor.target.value;
        this.props.manejador(anio);
    }
    render() {
        let numero;
        let anioelement = [<option value="">--</option>];
        for (numero = 2008; numero < 2028; numero++) {
            anioelement[numero - 2007] = <option value={ numero }>{ numero }</option>;
        }
        return (
            <Col xs={12} md={6}>
                <ControlLabel><Glyphicon glyph="calendar"/> Fecha Desde</ControlLabel>
                <FormGroup controlId="formControlsSelect">
                    <Col xs={12} md={6}>
                        <ControlLabel>Mes</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" onChange={ this.selecm }>
                            <option value="">--</option>
                            <option value="01">Enero</option>
                            <option value="02">Febrero</option>
                            <option value="03">Marzo</option>
                            <option value="04">Abril</option>
                            <option value="05">Mayo</option>
                            <option value="06">Junio</option>
                            <option value="07">Julio</option>
                            <option value="08">Agosto</option>
                            <option value="09">Septiembre</option>
                            <option value="10">Octubre</option>
                            <option value="11">Noviembre</option>
                            <option value="12">Diciembre</option>
                        </FormControl>
                    </Col>
                    <Col xs={12} md={6}>
                        <ControlLabel>Año</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" onChange={ this.seleca }>
                            { anioelement }
                        </FormControl>
                    </Col>
                </FormGroup>
            </Col>
        );
    }
}

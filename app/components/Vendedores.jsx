import  React from 'react';
import Autocomplete from 'react-autocomplete';
import Jquey from 'jquery';
import {  Button, Col, ControlLabel } from 'react-bootstrap/lib';
const TOKEN = "14457b646146cf31a40d";
export default class Vendedores extends React.Component {
    constructor(props) {
        super(props);
        this.borrar = this.borrar.bind(this);
    }
    borrar(){
        this.props.manejador("", { label: "", indice: 0 });
    }
    render(){
        let vendedorelement = this.props.vendedorescrito;
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
                    value={ this.props.valorv }
                    onChange={ this.props.change }
                    onSelect={ this.props.manejador }
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
import  React from 'react';
import Jquey from 'jquery';
import Autocomplete from 'react-autocomplete';
import { Button, Col, ControlLabel } from 'react-bootstrap';
const TOKEN = "14457b646146cf31a40d";
export default class Clientes extends React.Component {
    constructor(props){
        super(props);
        this.borrar = this.borrar.bind(this);
    }

    borrar(){
        this.props.manejador("", { label: "", indice: 0 });
    }
    render() {
        let clientelement = this.props.clienteescrito;
        return(
            <Col xs={6} md={3}>
                <ControlLabel>Seleccione un cliente</ControlLabel>
                <Autocomplete
                    placeholder="Seleccione un cliente"
                    items={ clientelement }
                    getItemValue={ (item) => item.label }
                    renderItem={(item, isHighlighted) =>
                        <div key={"cli"+item.indice } style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.label}
                        </div>
                    }
                    value={ this.props.valorc }
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
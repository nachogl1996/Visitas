import  React from 'react';
import Autocomplete from 'react-autocomplete';
import { Button, Col, ControlLabel, Glyphicon } from 'react-bootstrap';
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
                <ControlLabel><Glyphicon glyph="user"/> Seleccione un cliente</ControlLabel>
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
                <Button onClick={ this.borrar } bsSize="small"><Glyphicon glyph="remove" alt="borrar"/></Button>
            </Col>
        );
    }
}
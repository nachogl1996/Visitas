import React from 'react';
import { Col, FormGroup, Checkbox, Glyphicon } from 'react-bootstrap';
const TOKEN = "14457b646146cf31a40d";
export default class Checkfav extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.selec = this.selec.bind(this);
    }
    change() {
        let fav = !this.props.fav;
        this.props.manejador(fav);
    }
    selec() {
        let mias = !this.props.misvisitas;
        this.props.manejador2(mias);
    }
    render() {
        return(
            <Col md={2} xs={6}>
                <FormGroup>
                    <Checkbox onClick={ this.change } checked={this.props.fav}><Glyphicon glyph="star"/>Favoritos</Checkbox>
                </FormGroup>
                <FormGroup>
                    <Checkbox onClick={ this.selec } checked={this.props.misvisitas}><Glyphicon glyph="heart"/>Mis Visitas</Checkbox>
                </FormGroup>
            </Col>
        );
    }
}

import  React from 'react';
import Jquey from 'jquery';
import Autocomplete from 'react-autocomplete';
import { Button, Col, FormGroup, Checkbox } from 'react-bootstrap';
const TOKEN = "14457b646146cf31a40d";
export default class Checkfav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fav: this.props.fav,
            misvisitas: this.props.misvisitas,
        };
        this.change = this.change.bind(this);
        this.selec = this.selec.bind(this);
    }
    change(){
        let fav = !this.state.fav
        this.setState({
            fav: fav,
        });
        this.props.manejador(fav);
    }
    selec(){
        let mias = !this.state.misvisitas;
        this.setState({
            misvisitas: mias,
        });
        this.props.manejador2(mias);
    }
    render() {
        return(
            <Col md={2} xs={6}>
                <FormGroup>
                    <Checkbox onClick={ this.change } checked={this.state.fav}>Favoritos</Checkbox>
                </FormGroup>
                <FormGroup>
                    <Checkbox onClick={ this.selec }>Mis Visitas</Checkbox>
                </FormGroup>
            </Col>
        );
    }
}
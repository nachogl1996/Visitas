import  React from 'react';
import { Button, Col, Glyphicon, ButtonGroup, ListGroupItem } from 'react-bootstrap';
const TOKEN = "14457b646146cf31a40d";
import Jquey from 'jquery';
export default class VisitListElement extends React.Component {
    constructor(props) {
        super(props);
        this.elementClick = this.elementClick.bind(this);
        this.favclick = this.favclick.bind(this);
    }
    elementClick() {
        this.props.manejadorClick(this.props.mykey);
    }
    favclick(){

        this.props.manejadorfav(this.props.mykey);
    }
    render() {
        let visita = this.props.visita;
        let id = visita["id"];
        let customer = visita["Customer"];
        let customern = customer["name"];
        let salesman = visita["Salesman"];
        let salesmann = salesman["fullname"];
        let fecha = visita["plannedFor"].substr(0,10);
        return(
            <div key={id}>
                <ListGroupItem className="listelement">
                        <ButtonGroup vertical className="fright">
                            <Button bsStyle={visita.favourite ? "warning": "default"} onClick={ this.favclick }><Glyphicon alt={visita.favourite ? "marcado como favorito": "desmarcado como favorito"} glyph={visita.favourite ? "star": "star-empty"}/></Button>
                            <Button onClick={ this.elementClick }><Glyphicon alt="Ver" glyph="eye-open"/></Button>
                        </ButtonGroup>
                        <div>
                            <p id = "customer"><Glyphicon glyph="user"/> Cliente: {customern}</p>
                            <p id = "salesman"><Glyphicon glyph="briefcase"/> Vendedor: {salesmann}</p>
                            <p id = "fecha"><Glyphicon glyph="calendar"/> Fecha: {fecha}</p>
                        </div>
                </ListGroupItem>
            </div>
        );
    }

}
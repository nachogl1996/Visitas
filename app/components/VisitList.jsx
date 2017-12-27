import  React from 'react';
import VisitListElement from "./VisitListElement";
import { Col, ListGroup } from 'react-bootstrap';

export default class VisitList extends React.Component {
    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
        this.favclick = this.favclick.bind(this);
    }
    visitClick(id) {
        this.props.manejadorVisitsClick(id);
    }
    favclick(indice){
        this.props.manejadorfav(indice);
    }
    render() {
        let visitas = this.props.visits;
        let visitelement = visitas.map((visita, indice) => {
            return(<div key={"visitas"+indice}><VisitListElement visita={ visita } mykey={indice} manejadorClick={ this.visitClick } manejadorfav={ this.favclick }/></div>);
        });
        return(
            <Col md={4} xs={12}><ListGroup>{ visitelement }</ListGroup></Col>
        );
    }
}
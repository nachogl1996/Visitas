import  React from 'react';
import VisitListElement from "./VisitListElement";

export default class VisitList extends React.Component {
    constructor(props) {
        super(props);
        this.visitClick = this.visitClick.bind(this);
    }
    visitClick(id) {
        this.props.manejadorVisitsClick(id);
    }
    render() {
        let visitas = this.props.visits;
        let visitelement = visitas.map((visita, indice) => {

            return(<div key={"visitas"+indice}><VisitListElement visita={ visita } mykey={indice} manejadorClick={ this.visitClick }/></div>);
        });
        return(
            <div>{ visitelement }</div>
        );
    }
}
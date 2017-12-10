import  React from 'react';

export default class VisitDetail extends React.Component {
    render() {
        let visita = this.props.visit;
        let id = visita["id"];
        let fecha = visita["plannedFor"];
        let notas = visita["notes"];
        return(
            <div key={id}>
                <h3>Id: { id }</h3>
                <h4>Fecha: { fecha }</h4>
                <p>Notas: { notas }</p>
            </div>
        );
    }
}
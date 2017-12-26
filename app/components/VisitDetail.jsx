import  React from 'react';
import { Panel, Col } from 'react-bootstrap';

export default class VisitDetail extends React.Component {
    render() {
        let visita = this.props.visit;
        let id = visita["id"];
        let fecha = visita["plannedFor"].substr(0,10);
        let notas = visita["notes"];
        let titulo = "Fecha: "+fecha
        return(
            <div key={id}>
                <Col md={8} mdOffset={0} xd={12}>
                    <Panel header={titulo}>
                        <p>ID: { id }</p>
                        <p>Notas: { notas }</p>
                    </Panel>
                </Col>
            </div>
        );
    }
}
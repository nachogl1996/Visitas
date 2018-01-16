import React from 'react';
import { Col, Glyphicon } from 'react-bootstrap';
export default class TargetElement extends React.Component {
    render() {
        let target = this.props.target;
        let compañia = target.Company;
        let compañianame = compañia.name;
        let notas = target.notes;
        let success = target.success;
        let type = target.TargetType;
        let name = type.name;
        let color = success ? "verde" : "rojo";
        return(
            <div key={this.props.mykey} className={ color }>
                <Col md={4}>
                <h5 className={ color }><Glyphicon glyph={ success ? "ok" : "remove" } alt={ success ? "completado" : "incompleto" }/>
                    { name }:
                </h5>
                    <ul className={ color }>
                        <p><Glyphicon glyph="piggy-bank"/> Compañia: { compañianame }</p>
                        <p><Glyphicon glyph="list-alt"/> Notas: { notas }</p>
                    </ul>
                </Col>
            </div>
        );
    }
}

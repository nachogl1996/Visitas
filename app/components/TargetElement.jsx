import  React from 'react';
import { Col } from 'react-bootstrap';
export default class TargetElement extends React.Component {
    render() {
        let target = this.props.target;
        let compañia = target["Company"];
        let compañianame = compañia["name"];
        let notas = target["notes"];
        let success = target["success"];
        let type = target["TargetType"];
        let name = type["name"];
        let color = success ? "verde": "rojo";
        return(
            <div key={this.props.mykey} className={ color }>
                <Col md={4}>
                <h5 className={ color }>
                    { name }:
                </h5>
                    <ul className={ color }>
                        <p>Compañia: { compañianame }</p>
                        <p>Notas: { notas }</p>
                    </ul>
                </Col>
            </div>
        );
    }
}
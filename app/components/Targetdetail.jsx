import  React from 'react';
import TargetElement from "./TargetElement";
import { Panel, Col } from 'react-bootstrap';
export default class Targetdetail extends React.Component {
    render() {
        let targets = this.props.targets;
        let targetelement = targets.map((target, indice) => {
            return(<div key={"TargetList"+indice}><ul><TargetElement target={target} mykey={indice}/></ul></div>)
        });
        return(
            <div>
                <Col md={7} mdOffset={1} xd={12}>
                    <Panel collapsible header="Objetivos" eventKey="3" className="listelement">
                        { targetelement }
                    </Panel>
                </Col>
            </div>

        );
    }
}
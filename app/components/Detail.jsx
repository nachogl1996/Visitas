import React from 'react';
import VisitDetail from "./VisitDetail";
import TargetDetail from "./Targetdetail";
import CustomerDetail from "./CustomerDetail";
import SalesmanDetail from "./SalesmanDetail";
import { Col, Accordion, Panel } from 'react-bootstrap';
export default class Detail extends React.Component {
    render() {
        let visita = this.props.visita;
        if(visita === null || visita === undefined) {
            return(<h1>No hay detalles</h1>);
        }
        let indice = this.props.mykey;
        let targets = visita.Targets;
        let customer = visita.Customer;
        let salesman = visita.Salesman;
        if(targets.length === 0) {
            return(
                <div key={"Detail" + indice}>
                    <VisitDetail visit={visita} mykey={indice}/>
                    <Accordion>
                        <SalesmanDetail salesman={salesman} mykey={indice}/>
                        <Col md={8} mdOffset={0} xd={12}>
                            <Panel collapsible header="Objetivos" eventKey="3" className="listelement">
                                <p>No hay objetivos</p>
                            </Panel>
                        </Col>
                        <CustomerDetail customer={customer} mykey={indice}/>
                    </Accordion>
                </div>
            );
        }
        return(
                <div key={"Detail" + indice}>
                    <VisitDetail visit={visita} mykey={indice}/>
                    <Accordion>
                        <SalesmanDetail salesman={salesman} mykey={indice}/>
                        <TargetDetail targets={targets} mykey={indice}/>
                        <CustomerDetail customer={customer} mykey={indice}/>
                    </Accordion>
                </div>
        );

    }
}

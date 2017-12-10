import  React from 'react';
import VisitDetail from "./VisitDetail";
import TargetDetail from "./Targetdetail";
import CustomerDetail from "./CustomerDetail";
import SalesmanDetail from "./SalesmanDetail";
export default class Detail extends React.Component {
    render() {
        let visita = this.props.visita;
        let indice = this.props.mykey;
        let targets = visita["Targets"];
        let customer = visita["Customer"];
        let salesman = visita["Salesman"];
        return(
            <div key={"Detail"+indice}>
                <VisitDetail visit={visita} mykey={indice}/>
                <TargetDetail targets={targets} mykey={indice}/>
                <CustomerDetail customer={customer} mykey={indice}/>
                <SalesmanDetail salesman={salesman} mykey={indice}/>
            </div>
        );
    }
}
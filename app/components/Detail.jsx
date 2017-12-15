import  React from 'react';
import VisitDetail from "./VisitDetail";
import TargetDetail from "./Targetdetail";
import CustomerDetail from "./CustomerDetail";
import SalesmanDetail from "./SalesmanDetail";
export default class Detail extends React.Component {
    render() {
        let visita = this.props.visita;
        if(visita === null || visita === undefined){
            return(<h1>No hay detalles</h1>);
        }
        let indice = this.props.mykey;
        let targets = visita["Targets"];
        let customer = visita["Customer"];
        let salesman = visita["Salesman"];
        if(targets.length === 0){
            return(
                <div key={"Detail"+indice}>
                    <VisitDetail visit={visita} mykey={indice}/>
                    <CustomerDetail customer={customer} mykey={indice}/>
                    <SalesmanDetail salesman={salesman} mykey={indice}/>
                </div>
            );
        }
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
import  React from 'react';

export default class VisitListElement extends React.Component {
    constructor(props) {
        super(props);
        this.elementClick = this.elementClick.bind(this);
    }
    elementClick() {
        this.props.manejadorClick(this.props.mykey);
    }
    render() {
        let visita = this.props.visita;
        let id = visita["id"];
        let customer = visita["Customer"];
        let customern = customer["name"];
        let salesman = visita["Salesman"];
        let salesmann = salesman["fullname"];
        let fecha = visita["plannedFor"];
        return(
            <div key={id}>
                <button onClick={this.elementClick}>
                    <ul id = {id}>
                        <li id = "customer">Cliente: {customern}</li>
                        <li id = "salesman">Vendedor: {salesmann}</li>
                        <li id = "fecha">Fecha: {fecha}</li>
                    </ul>
                </button>
            </div>
        );
    }

}
import  React from 'react';
import { Panel, Col } from 'react-bootstrap';
export default class CustomerDetail extends React.Component{
    render() {
        let customer = this.props.customer;
        let id = customer["id"];
        let name = customer["name"];
        let cif = customer["cif"];
        let dir1 = customer["address1"];
        let dir2 = customer["address2"];
        let city = customer["city"];
        let phone = customer["phone1"];
        let email = customer["email1"];
        let codigopostal = customer["postalCode"];
        return(
            <div key={"Customer"+this.props.mykey}>
                <Col md={7} mdOffset={1} xd={12}>
                    <Panel collapsible header="Comprador" eventKey="2" className="listelement">
                        <h3>Nombre: { name }</h3>
                        <h5>Id: { id } NIF: { cif }</h5>
                        <Col md={4}>
                            <h4>Localización:</h4>
                            <ul>
                                <p>Dirección principal: { dir1 }</p>
                                <p>Dirección secundaria: { dir2 }</p>
                                <p>Ciudad: { city }</p>
                                <p>Código Postal: { codigopostal }</p>
                            </ul>
                        </Col>
                        <Col md={4} mdOffset={2}>
                            <h4>Contacto:</h4>
                            <ul>
                                <p>Telefono: { phone }</p>
                                <p>Correo: { email }</p>
                            </ul>
                        </Col>
                    </Panel>
                </Col>
            </div>
        );
    }
}
import React from 'react';
import { Panel, Col, Glyphicon } from 'react-bootstrap';
export default class CustomerDetail extends React.Component {
    render() {
        let customer = this.props.customer;
        let id = customer.id;
        let name = customer.name;
        let cif = customer.cif;
        let dir1 = customer.address1;
        let dir2 = customer.address2;
        let city = customer.city;
        let phone = customer.phone1;
        let email = customer.email1;
        let codigopostal = customer.postalCode;
        return(
            <div key={"Customer" + this.props.mykey}>
                <Col md={8} mdOffset={0} xd={12}>
                    <Panel collapsible header="Comprador" eventKey="2" className="listelement">
                        <h3><Glyphicon glyph="user"/> Nombre: { name }</h3>
                        <h5><Glyphicon glyph="info-sign"/> Id: { id }<Glyphicon glyph="credit-card"/> NIF: { cif }</h5>
                        <Col md={4}>
                            <h4><Glyphicon glyph="map-marker"/> Localización:</h4>
                            <ul>
                                <p><Glyphicon glyph="home"/> Dirección principal: { dir1 }</p>
                                <p><Glyphicon glyph="home"/> Dirección secundaria: { dir2 }</p>
                                <p><Glyphicon glyph="globe"/> Ciudad: { city }</p>
                                <p><Glyphicon glyph="list-alt"/> Código Postal: { codigopostal }</p>
                            </ul>
                        </Col>
                        <Col md={4} mdOffset={2}>
                            <h4><Glyphicon glyph="book"/> Contacto:</h4>
                            <ul>
                                <p><Glyphicon glyph="earphone"/> Telefono: { phone }</p>
                                <p><Glyphicon glyph="envelope"/> Correo: { email }</p>
                            </ul>
                        </Col>
                    </Panel>
                </Col>
            </div>
        );
    }
}

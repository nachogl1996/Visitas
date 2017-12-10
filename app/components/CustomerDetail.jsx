import  React from 'react';

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
                <h2>Comprador</h2>
                <h3>Nombre: { name }</h3>
                <h5>Id: { id } NIF: { cif }</h5>
                <h4>Localización:</h4>
                <ul>
                    <li>Dirección principal: { dir1 }</li>
                    <li>Dirección secundaria: { dir2 }</li>
                    <li>Ciudad: { city }</li>
                    <li>Código Postal: { codigopostal }</li>
                </ul>
                <h4>Contacto:</h4>
                <u>
                    <li>Telefono: { phone }</li>
                    <li>Correo: { email }</li>
                </u>
            </div>
        );
    }
}
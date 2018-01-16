import React from 'react';
import { Panel, Col, Glyphicon } from 'react-bootstrap';

export default class SalesmanDetail extends React.Component {
    render() {
        let salesman = this.props.salesman;
        let name = salesman.fullname;
        let foto = salesman.Photo;
        let url = "";
        if(foto === null) {
            url = "./../assets/noface.png";
        } else {
            url = foto.url;
        }
        let alt = "Foto del vendedor"+name;
        return(
            <div key={"Salesman" + this.props.mykey}>
                <Col md={8} mdOffset={0} xd={12}>
                    <Panel collapsible header="Vendedor" role="heading" aria-level="1" eventKey="1" className="listelement">
                        <img src={ url } width="50" height="60" className="fleft" alt={ alt }/>
                        <h4 className="fright"><Glyphicon glyph="user"/> { name }</h4>
                    </Panel>
                </Col>
            </div>
        );
    }
}

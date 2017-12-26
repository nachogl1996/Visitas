import  React from 'react';
import { Panel, Col } from 'react-bootstrap';

export default class SalesmanDetail extends React.Component {
    render() {
        let salesman = this.props.salesman;
        let name = salesman["fullname"];
        let foto = salesman["Photo"];
        let url = ""
        if(foto === null){
            url = "./../assets/noface.png"
        } else {
            url = foto["url"];
        }
        return(
            <div key={"Salesman"+this.props.mykey}>
                <Col md={8} mdOffset={0} xd={12}>
                    <Panel collapsible header="Vendedor" eventKey="1" className="listelement">
                        <img src={ url } width="50" height="60" className="fleft"/>
                        <h4 className="fright">{ name }</h4>
                    </Panel>
                </Col>
            </div>
        );
    }
}
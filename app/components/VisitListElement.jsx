import  React from 'react';
import { Button, Col, Glyphicon, ButtonGroup, ListGroupItem } from 'react-bootstrap';
const TOKEN = "14457b646146cf31a40d";
import Jquey from 'jquery';
export default class VisitListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fav: this.props.fav,
        }
        this.elementClick = this.elementClick.bind(this);
        this.favclick = this.favclick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    elementClick() {
        this.props.manejadorClick(this.props.mykey);
    }
    favclick(){
        let visid = this.props.visita.id;
        let fav = this.state.fav;
        this.setState({
            fav: !fav,
        });
        let url = "";
        if (fav){
            url = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/"+visid+"?token="+TOKEN+"&_method=DELETE";
        } else {
            url = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/"+visid+"?token="+TOKEN+"&_method=PUT";
        }
        let respuesta = Jquey.ajax({url: url})
            .done(function( data ) {
                console.log(data)
            });
    }
    componentDidMount(){
        this.setState({
            fav: this.props.fav,
        });
    }
    render() {
        let visita = this.props.visita;
        let id = visita["id"];
        let customer = visita["Customer"];
        let customern = customer["name"];
        let salesman = visita["Salesman"];
        let salesmann = salesman["fullname"];
        let fecha = visita["plannedFor"].substr(0,10);
        return(
            <div key={id}>
                <ListGroupItem className="listelement">
                        <ButtonGroup vertical className="fright">
                            <Button bsStyle={this.state.fav ? "warning": "default"} onClick={ this.favclick }><Glyphicon glyph="star"/></Button>
                            <Button onClick={ this.elementClick }>Ver</Button>
                        </ButtonGroup>
                        <div>
                            <p id = "customer">Cliente: {customern}</p>
                            <p id = "salesman">Vendedor: {salesmann}</p>
                            <p id = "fecha">Fecha: {fecha}</p>
                        </div>
                </ListGroupItem>
            </div>
        );
    }

}
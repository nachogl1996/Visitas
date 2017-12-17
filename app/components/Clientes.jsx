import  React from 'react';
import Jquey from 'jquery';
import Autocomplete from 'react-autocomplete';
import { Button, Col, ControlLabel } from 'react-bootstrap';
const TOKEN = "14457b646146cf31a40d";
export default class Clientes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            indice: this.props.indice,
            clientes: [{name: "hola", cif: "912812"}],
            valor: "",
            clienteescrito: [{name: "hola", cif: "912812"}],
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.modificar = this.modificar.bind(this);
        this.change = this.change.bind(this);
        this.selec = this.selec.bind(this);
        this.comparar = this.comparar.bind(this);
        this.borrar = this.borrar.bind(this);
    }
    modificar(datos){
        let clientelement = datos.map((cliente, indice) => {
            return({ label: cliente.name, indice: indice });
        });
        this.setState({
            indice: this.props.indice,
            clientes: clientelement,
            clienteescrito: clientelement,
        });
    }
    borrar(){
        this.setState({
            indice: 0,
            clienteescrito: this.state.clientele,
            valor: "",
        });
        this.props.manejador("", 0);
    }
    comparar(valor){
        return(valor.label.toLowerCase().indexOf(this.state.valor.toLowerCase()) !== -1);
    }
    change(valor){
        let clientelement = this.state.clientes.filter(this.comparar);
        this.setState({
            valor: valor.target.value,
            clienteescrito: clientelement,
        });
    }
    selec(valor, cliente){
        this.setState({
            valor: valor,
            indice: cliente.indice,
        });
        this.props.manejador(cliente.label, cliente.indice);
    }
    componentDidMount(){
        let url = "https://dcrmt.herokuapp.com/api/customers?token="+TOKEN;
        let respuesta = Jquey.ajax({
            url: url
        })
            .fail(function () {
                console.log("ERROR al descargar clientes");
            })
            .done(function( data ) {
                this.modificar(data)
            }.bind(this));
    }
    render() {
        let clientelement = this.state.clienteescrito;
        return(
            <Col xs={6} md={3}>
                <ControlLabel>Seleccione un cliente</ControlLabel>
                <Autocomplete
                    placeholder="Seleccione un cliente"
                    items={ clientelement }
                    getItemValue={ (item) => item.label }
                    renderItem={(item, isHighlighted) =>
                        <div key={"cli"+item.indice } style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.label}
                        </div>
                    }
                    value={ this.state.valor }
                    onChange={ this.change }
                    onSelect={ this.selec }
                    renderMenu={children => (
                        <div className="menu" key={children.indice}>
                            {children}
                        </div>
                    )}
                />
                <Button onClick={ this.borrar } bsSize="small">Borrar</Button>
            </Col>
        );
    }
}
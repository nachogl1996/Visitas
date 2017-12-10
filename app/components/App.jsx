import React from 'react';
import './../assets/scss/main.scss';
import { visits } from "./../assets/mock.data";
import VisitList from "./VisitList";
import Detail from "./Detail";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indice: 0,
            visita: visits[0],
        };
        this.appClick = this.appClick.bind(this);
    }

    appClick(indice) {
        console.log(indice);
        console.log(this.state.visita["id"]);
        this.setState({
            indice: indice,
            visita: visits[indice],
        });
        console.log(this.state.visita["id"]);
    }

    render() {
        return (<div>
            <h2 id="heading">Practica 6</h2>
            <VisitList visits={ visits } manejadorVisitsClick={ this.appClick }/>
            <Detail visita={this.state.visita} mykey={this.state.indice}/>
            </div>
        );

    }

}


import React from 'react';
export default class FabricaElement extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let fabrica = this.props.fabrica;
        let name = fabrica.name;
        let indice = fabrica.indice;
        if(indice === 0) {
            return(
                <option key={"fe0"} value={indice}>Cualquiera</option>
            );
        }
        return(
            <option key={"fe" + indice} value={indice}>{ name }</option>
        );
    }
}

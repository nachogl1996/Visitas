import  React from 'react';

export default class TargetElement extends React.Component {
    render() {
        let target = this.props.target;
        let compañia = target["Company"];
        let compañianame = compañia["name"];
        let notas = target["notes"];
        let success = target["success"];
        let type = target["TargetType"];
        let name = type["name"];
        let color = success ? "verde": "rojo";
        console.log(color)
        return(
            <div key={this.props.mykey}>
                <li className={ color }>
                    { name }:
                    <ul>
                        <li>Compañia: { compañianame }</li>
                        <li>Notas: { notas }</li>
                    </ul>
                </li>
            </div>
        );
    }
}
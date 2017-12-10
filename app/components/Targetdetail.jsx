import  React from 'react';
import TargetElement from "./TargetElement";

export default class Targetdetail extends React.Component {
    render() {
        let targets = this.props.targets;
        if(targets.length === 0){
            return;
        }
        console.log(targets.length);
        let targetelement = targets.map((target, indice) => {
            return(<div key={"TargetList"+indice}><ul><TargetElement target={target} mykey={indice}/></ul></div>)
        });
        return(
            <div>
                <h3>Objetivos:</h3>
                { targetelement }
            </div>

        );
    }
}
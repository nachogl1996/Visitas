import  React from 'react';

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
                <h2>Vendedor:</h2>
                <img src={ url } width="50" height="60"/>
                <h4>{ name }</h4>
            </div>
        );
    }
}
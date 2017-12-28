import { Provider } from 'react-redux';
import GlobalState from './../reducers/reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import React from 'react';
import { visits } from "./../assets/mock.data";
import { AppContainer } from 'react-hot-loader';
import App from './App';
export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            indice: 0,
            visits: visits,
            fav: true,
            mias: false,
            indicefabrica: 0,
            mesdesde: "",
            aniodesde:"",
            meshasta: "",
            aniohasta:"",
            valorv: "",
            vendedores: [{fullname: "hola", cif: "912812"}],
            vendedoresescritos: [{fullname: "hola", cif: "912812"}],
            clientes: [{name: "hola", cif: "912812"}],
            valorc: "",
            clientesescritos: [{name: "hola", cif: "912812"}],
            fabricas: [{name: "Cualquiera", id: ""}],
        };
        this.store = this.configureStore();
    }

    render() {
        return (
            <AppContainer>
                <Provider store={ this.store }>
                    <div style={{height: '100%'}}><App store={ this.store }/></div>
                </Provider>
            </AppContainer>
        );
    }

    configureStore() {
        const store = createStore(GlobalState, this.initialState);
        if (module.hot) {
            module.hot.accept('./../reducers/reducers', () => {
                const nextRootReducer = require('./../reducers/reducers').default;
                store.replaceReducer(nextRootReducer);
            });
        }
        return store;
    }
}
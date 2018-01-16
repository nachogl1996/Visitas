import { combineReducers } from 'redux';
import visitsreducer from "./visitsreducer";
import indicereducer from "./indicereducer";
import fabricasReducer from "./fabricasReducer";
import indiceFabricasReducer from "./indiceFabricaReducer";
import valorcReducer from "./valorcReducer";
import clientesescritosReducer from "./clientesescritosReducer";
import clientesReducer from "./clientesReducer";
import valorvReducer from "./valorvReducer";
import vendedoresescritosReducer from "./vendedoresescritosReducer";
import vendedoresReducer from "./vendedoresReducer";
import meshastaReducer from "./meshastaReducer";
import mesdesdeReducer from "./mesdesdeReducer";
import anioDesdeReducer from "./anioDesdeReducer";
import anioHastaReducer from "./anioHastaReducer";
import favReducer from "./favReducer";
import miasReducer from "./miasReducer";
const GlobalState = combineReducers({
    indice: indicereducer,
    visits: visitsreducer,
    fav: favReducer,
    mias: miasReducer,
    fabricas: fabricasReducer,
    indicefabrica: indiceFabricasReducer,
    valorc: valorcReducer,
    clientesescritos: clientesescritosReducer,
    clientes: clientesReducer,
    valorv: valorvReducer,
    vendedoresescritos: vendedoresescritosReducer,
    vendedores: vendedoresReducer,
    meshasta: meshastaReducer,
    mesdesde: mesdesdeReducer,
    aniodesde: anioDesdeReducer,
    aniohasta: anioHastaReducer,
});
export default GlobalState;

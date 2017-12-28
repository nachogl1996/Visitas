function clientesReducer(state = [{name: "hola", cif: "912812"}], action ) {
    switch (action.type){
        case 'CARGAR_CLIENTES':
            return action.clientes;
        default:
            return state;
    }
}
export default clientesReducer;
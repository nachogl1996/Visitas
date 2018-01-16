function clientesescritosReducer(state = [{name: "hola", cif: "912812"}], action) {
    switch (action.type) {
    case 'CARGAR_CLIENTES_ESCRITOS':
        return action.clientesescritos;
    default:
        return state;
    }
}
export default clientesescritosReducer;

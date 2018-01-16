function vendedoresescritosReducer(state = [{name: "hola", cif: "912812"}], action) {
    switch (action.type) {
    case 'CARGAR_VENDEDORES_ESCRITOS':
        return action.vendedoresescritos;
    default:
        return state;
    }
}
export default vendedoresescritosReducer;

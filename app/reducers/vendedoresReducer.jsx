function vendedoresReducer(state = [{name: "hola", cif: "912812"}], action ) {
    switch (action.type){
        case 'CARGAR_VENDEDORES':
            return action.vendedores;
        default:
            return state;
    }
}
export default vendedoresReducer;
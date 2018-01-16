function fabricasReducer(state = [{name: "Cualquiera", id: ""}], action) {
    switch (action.type) {
    case 'CARGAR_FABRICAS':
        return action.fabricas;
    default:
        return state;
    }
}
export default fabricasReducer;

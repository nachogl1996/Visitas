function anioDesdeReducer(state = "", action) {
    switch (action.type) {
    case 'CAMBIAR_ANIO_DESDE':
        return action.aniodesde;
    default:
        return state;
    }
}
export default anioDesdeReducer;

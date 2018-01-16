function anioHastaReducer(state = "", action) {
    switch (action.type) {
    case 'CAMBIAR_ANIO_HASTA':
        return action.aniohasta;
    default:
        return state;
    }
}
export default anioHastaReducer;

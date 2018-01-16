function valorcReducer(state = "", action) {
    switch (action.type) {
    case 'CAMBIAR_VALORC':
        return action.valorc;
    default:
        return state;
    }
}
export default valorcReducer;

function miasReducer(state = false, action) {
    switch (action.type) {
    case 'CAMBIAR_MIAS':
        return action.mias;
    default:
        return state;
    }
}
export default miasReducer;

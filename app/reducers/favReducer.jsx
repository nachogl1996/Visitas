function favReducer(state = true, action) {
    switch (action.type) {
    case 'CAMBIAR_FAV':
        return action.fav;
    default:
        return state;
    }
}
export default favReducer;

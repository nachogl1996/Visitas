function mesdesdeReducer(state = "", action) {
    switch (action.type) {
    case 'CAMBIAR_MES_DESDE':
        return action.mesdesde;
    default:
        return state;
    }
}
export default mesdesdeReducer;

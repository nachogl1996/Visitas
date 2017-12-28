function valorvReducer(state = "", action ) {
    switch (action.type){
        case 'CAMBIAR_VALORV':
            return action.valorv;
        default:
            return state;
    }
}
export default valorvReducer;
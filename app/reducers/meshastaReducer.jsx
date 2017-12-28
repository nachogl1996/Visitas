function meshastaReducer(state = "", action ) {
    switch (action.type){
        case 'CAMBIAR_MES_HASTA':
            return action.meshasta;
        default:
            return state;
    }
}
export default meshastaReducer;
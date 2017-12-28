function indicereducer(state = 0, action ) {
    switch (action.type){
        case 'CAMBIAR_INDICE':
            return action.indice;
        default:
            return state;
    }
}
export default indicereducer;
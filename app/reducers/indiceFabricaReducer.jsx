function indiceFabricasReducer(state = 0, action ) {
    switch (action.type){
        case 'CAMBIAR_INDICE_FABRICAS':
            return action.indicefabricas;
        default:
            return state;
    }
}
export default indiceFabricasReducer;
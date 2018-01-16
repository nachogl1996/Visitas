import { visits } from "./../assets/mock.data";
function visitsreducer(state = visits, action) {
    switch (action.type) {
    case 'CARGAR_VISITAS':
        return action.visitas;
    default:
        console.log("noooo");
        return state;
    }
}
export default visitsreducer;

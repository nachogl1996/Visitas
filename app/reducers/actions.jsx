export function cargarvisitas(visitas) {
    return {
       type: 'CARGAR_VISITAS',
       visitas: visitas
    }
}
export function cambiarindice(indice) {
    return {
        type: 'CAMBIAR_INDICE',
        indice: indice
    }
}
export function cargarfabricas(fabricas) {
    return {
        type: 'CARGAR_FABRICAS',
        fabricas: fabricas
    }
}
export function cambiarindicefabricas(indice) {
    return {
        type: 'CAMBIAR_INDICE_FABRICAS',
        indicefabricas: indice
    }
}
export function cambiarvalorc(valorc) {
    return {
        type: 'CAMBIAR_VALORC',
        valorc: valorc
    }
}
export function cargarclientesescritos(clientesescritos) {
    return {
        type: 'CARGAR_CLIENTES_ESCRITOS',
        clientesescritos: clientesescritos
    }
}
export function cargarclientes(clientes) {
    return {
        type: 'CARGAR_CLIENTES',
        clientes: clientes
    }
}
export function cambiarvalorv(valorv) {
    return {
        type: 'CAMBIAR_VALORV',
        valorv: valorv
    }
}
export function cargarvendedoresescritos(vendedoresescritos) {
    return {
        type: 'CARGAR_VENDEDORES_ESCRITOS',
        vendedoresescritos: vendedoresescritos
    }
}
export function cargarvendedores(vendedores) {
    return {
        type: 'CARGAR_VENDEDORES',
        vendedores: vendedores
    }
}
export function cambiarfav(fav) {
    return {
        type: 'CAMBIAR_FAV',
        fav: fav
    }
}
export function cambiarmias(mias) {
    return {
        type: 'CAMBIAR_MIAS',
        mias: mias
    }
}
export function cambiarmesdesde(mes) {
    return {
        type: 'CAMBIAR_MES_DESDE',
        mesdesde: mes
    }
}
export function cambiarmeshasta(mes) {
    return {
        type: 'CAMBIAR_MES_HASTA',
        meshasta: mes
    }
}
export function cambiaraniohasta(anio) {
    return {
        type: 'CAMBIAR_ANIO_HASTA',
        aniohasta: anio
    }
}
export function cambiaraniodesde(anio) {
    return {
        type: 'CAMBIAR_ANIO_DESDE',
        aniodesde: anio
    }
}
import { Marcador } from './marcador';


export class Mapa {

    private marcadores: { [key: string]: Marcador } = {

        '1': {
            id: '1',
            nombre: 'Hugo',
            lng: -97.09118664264679,
            lat: 18.848644801417727,
            color: '#dd8fee'
          },
        '2': {
            id: '2',
            nombre: 'Paco',
            lng: -97.08914279937744, 
            lat: 18.84841127062719,
            color: '#790af0'
          },
        '3': {
            id: '3',
            nombre: 'Luis',
            lng: -97.08742618560791, 
            lat: 18.846949157422692,
            color: '#19884b'
          }
    }

    constructor() {}

    getMarcadores() {
        return this.marcadores;
    }

    agregarMarcador( marcador: Marcador ) {
        this.marcadores[ marcador.id ] = marcador;
    }

    borrarMarcador( id: string ) {
        delete this.marcadores[id];
        return this.getMarcadores()
    }

    moverMarcador( marcador: Marcador ) {
        this.marcadores[marcador.id].lng = marcador.lng;
        this.marcadores[marcador.id].lat = marcador.lat;
    }

}


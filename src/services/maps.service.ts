import { Place } from '../models/place.model'
import axios from 'axios'

enum PlaceType {
    recordStudio = 'RecordStudio',
    podcastStudio = 'PodcastStudio',
    audioVisualStudio = 'AudioVisualStudio' 
}

interface IMapsService {
    getNearestPlaces: (latitude: string, longitude: string, radius: number, placeType: PlaceType) => Promise<Place[]>
}

class MapsService implements IMapsService {
    async getNearestPlaces(latitude: string, longitude: string, radius: number, placeType: PlaceType) {
        return Promise.resolve([]);
    }

}

export { PlaceType, IMapsService, MapsService }
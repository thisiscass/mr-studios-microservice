import { Place } from '../models/place.model'
import axios from 'axios'

enum PlaceType {
    recordStudio = 'RecordStudio',
    podcastStudio = 'PodcastStudio',
    audioVisualStudio = 'AudioVisualStudio' 
}

const getNearestPlaces = (latitude: string, longitude: string, radius: number, placeType: PlaceType): Promise<Place[]> => 
    Promise.resolve(new Array<Place>());

export { PlaceType, getNearestPlaces }
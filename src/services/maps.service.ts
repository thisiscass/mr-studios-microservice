import { Place } from '../models/place.model'
import axios from 'axios'

type Filter = {
    openNow?: boolean;
    type: PlaceType;
}

enum PlaceType {
    recordStudio = 'Record Studios',
    podcastStudio = 'Podcast Studios',
    audioVisualStudio = 'Audiovisual Studios',
}

const getNearestPlaces = async (latitude: string, longitude: string, radius: number, placeType: PlaceType): Promise<Place[]> => {
    const body = {
      textQuery: placeType.toString(),
      openNow: false,
      locationBias: {
        circle: {
          center: { latitude: latitude, longitude: longitude },
          radius: radius,
        },
      },
    };

    const apiResource = 'places:searchText'
;
    let response = await axios.post(
      `https://places.googleapis.com/v1/${apiResource}`,
      body,
      { headers: { "X-Goog-FieldMask": "*",
      "X-Goog-Api-Key": "" }}
    );

    return response.data;

}

export { PlaceType, getNearestPlaces }
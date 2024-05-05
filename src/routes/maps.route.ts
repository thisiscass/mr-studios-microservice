import { NextFunction, Request, Response } from "express";
import { Place } from "../models/place.model";
import { IMapsService, PlaceType } from "../services/maps.service";

type ExpressRouteFunc = (req: Request, res: Response, next?: NextFunction) => void | Promise<void>;

export function getStudios(mapsService: IMapsService): ExpressRouteFunc { 
    let result: Place[] = [];
    return async function(req: Request, res: Response) {	

        const places = await mapsService.getNearestPlaces('123', '123', 5, PlaceType.audioVisualStudio)
		res.json({ data: places,  ok: true });
	}
}
import { NextFunction, Request, Response } from "express";
import { Place } from "../models/place.model";
import { PlaceType } from "../services/maps.service";

type ExpressRouteFunc = (req: Request, res: Response, next?: NextFunction) => void | Promise<void>;

export function getStudios(getNearestPlaces: (...args: any[]) => Promise<Place[]>): ExpressRouteFunc { 
    return async function(req: Request, res: Response) {	

        const places = await getNearestPlaces('123', '123', 5, PlaceType.podcastStudio)
		res.json({ data: places,  ok: true });
	}
}
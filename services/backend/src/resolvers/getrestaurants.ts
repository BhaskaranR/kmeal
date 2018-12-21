

import * as Wreck from 'wreck';
import * as config from 'config';
import { validate } from '../helpers/util';
import * as Joi from 'joi';
import { getRestaurant } from '../models/searchrestaurant';

let API_KEY = config.get("googlePlacesAPIKey");
let OSM_KEY = config.get("OSMApiKey");


const nearbyQueryOptional =
    Joi.object().keys({
        long: Joi.number(),
        lat: Joi.number(),
        maxDistance: Joi.number().default(2),
        limit: Joi.number().default(20)
    });

export default {
    Query: {
        getRestaurantsNearby: async (_: any, { nearby }: {
            nearby: {
                lat: number,
                long: number,
                maxDistance: number,
                limit: number
            }
        }) => {
            try {
                const validatedLike = await validate(nearby, nearbyQueryOptional);
                return getRestaurant(nearby);
            }
            catch (e) {
                throw new Error(e.ValidationError);
            }
        }
    }
}

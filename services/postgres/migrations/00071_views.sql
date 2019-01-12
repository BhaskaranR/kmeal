-- select kmeal.get_nearby(40.710237, -74.007810, 4, 'italian', 'REGULAR');

CREATE OR REPLACE FUNCTION kmeal.get_nearby
(latitude FLOAT, longitude FLOAT, radius INTEGER, cuisine VARCHAR, timeofop VARCHAR) 
 returns setof json as $body$
BEGIN
    RETURN QUERY
    select row_to_json(s)
    from (
    SELECT 
    d.restaurant_id,
    d.name,
    d.owner,
    d.description,
    d.phone,
    d.address,
    d.logo,
    d.rating,
    d.timeofoperation,
    d.distance
    FROM (
    SELECT z.restaurant_id as restaurant_id,
            z.name as name,
            z.owner as owner,
            z.description as description,
            z.phone as phone,
            z.address as address,
            z.logo as logo,
            z.rating as rating,
            z.timeofoperation as timeofoperation,
            z.latitude, z.longitude,
            p.distance_unit
                    * DEGREES(ACOS(COS(RADIANS(p.latpoint))
                    * COS(RADIANS(z.latitude))
                    * COS(RADIANS(p.longpoint - z.longitude))
                    + SIN(RADIANS(p.latpoint))
                    * SIN(RADIANS(z.latitude)))) AS distance
    FROM kmeal.restaurant AS z  JOIN kmeal.restaurant_categories AS rc ON 
        rc.restaurant_id = z.restaurant_id 
    JOIN (   /* these are the query parameters */
            SELECT   latitude AS latpoint,   longitude AS longpoint,
                         111.045 AS distance_unit
        ) AS p ON 1=1
    WHERE z.latitude
        BETWEEN p.latpoint  - (radius / p.distance_unit)
            AND p.latpoint  + (radius / p.distance_unit)
        AND z.longitude
        BETWEEN p.longpoint - (radius / (p.distance_unit * COS(RADIANS(p.latpoint))))
            AND p.longpoint + (radius / (p.distance_unit * COS(RADIANS(p.latpoint))))
        AND  rc.category = cuisine AND z.timeofoperation = timeofop
    ) AS d
    WHERE distance <= radius
    ORDER BY distance
    LIMIT 100) s;
END; $body$
LANGUAGE 'plpgsql';
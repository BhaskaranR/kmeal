--select kmeal.get_nearby(40.710237,   -74.007810);


CREATE OR REPLACE FUNCTION kmeal.get_nearby
(latitude FLOAT, longitude FLOAT) 
 RETURNS TABLE(
 id INTEGER
)
AS $$
BEGIN
    RETURN QUERY
    SELECT 
    d.id
    FROM (
    SELECT z.restaurant_id as id,
            z.name,
            z.latitude, z.longitude,
            p.radius,
            p.distance_unit
                    * DEGREES(ACOS(COS(RADIANS(p.latpoint))
                    * COS(RADIANS(z.latitude))
                    * COS(RADIANS(p.longpoint - z.longitude))
                    + SIN(RADIANS(p.latpoint))
                    * SIN(RADIANS(z.latitude)))) AS distance
    FROM kmeal.restaurant AS z
    JOIN (   /* these are the query parameters */
            SELECT   latitude AS latpoint,   longitude AS longpoint,
                    10.0 AS radius,      111.045 AS distance_unit
        ) AS p ON 1=1
    WHERE z.latitude
        BETWEEN p.latpoint  - (p.radius / p.distance_unit)
            AND p.latpoint  + (p.radius / p.distance_unit)
        AND z.longitude
        BETWEEN p.longpoint - (p.radius / (p.distance_unit * COS(RADIANS(p.latpoint))))
            AND p.longpoint + (p.radius / (p.distance_unit * COS(RADIANS(p.latpoint))))
    ) AS d
    WHERE distance <= radius
    ORDER BY distance
    LIMIT 1;
END; $$
LANGUAGE 'plpgsql';



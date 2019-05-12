-- select kmeal.get_nearby(40.710237, -74.007810, 4, 'italian', 'REGULAR');

create table "kmeal"."restaurant_nearby" (
  "restaurant_id" INTEGER NOT NULL PRIMARY KEY REFERENCES  kmeal.restaurant("restaurant_id"),
  "owner" CHAR(12) NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "phone"       VARCHAR(15) NOT NULL,
  "latitude" FLOAT NOT NULL,
  "longitude" FLOAT NOT NULL,
  "location" GEOGRAPHY(Point),
  "address"     TEXT NOT NULL,
  "logo"        TEXT NOT NULL,
  "rating"      INTEGER,
  "timeofoperation" VARCHAR(60) NOT NULL,
  "isactive"    BOOLEAN NOT NULL,
   "distance" DECIMAL NOT NULL 
  );
CREATE FUNCTION  kmeal.get_nearby(latitude FLOAT, longitude FLOAT, radius INTEGER)  RETURNS SETOF kmeal.restaurant_nearby AS $$
     SELECT ROW(d.restaurant_id,
            d.name as name,
            d.owner as owner,
            d.description as description,
            d.phone as phone,
            d.latitude as latitude,
            d.longitude as longitude,
            d.location as location,
            d.address as address,
            d.logo as logo,
            d.rating as rating,
            d.timeofoperation as timeofoperation,
            d.isactive as isactive,
            d.distance)::kmeal.restaurant_nearby
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
            z.location as location
            z.isactive as isactive,
            z.latitude as latitude, 
            z.longitude as longitude,
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
       -- AND  rc.category = cuisine AND z.timeofoperation = timeofop
    ) AS d
    WHERE distance <= 4
    ORDER BY distance
    LIMIT 100;
$$ LANGUAGE SQL STABLE;
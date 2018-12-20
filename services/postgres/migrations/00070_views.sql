
CREATE OR REPLACE VIEW kmeal.restaurant_location
as
  (
  select
    b.owner,
    b.name,
    b.description,
    b.phone, b.location, b.address, b.logo,
    ST_Distance_Sphere(b.location::Geometry, b.location::Geometry) as distance
  from kmeal.account a
    inner join
    kmeal.restaurant b
    on  
a.owner = b.owner
);

CREATE OR REPLACE FUNCTION kmeal.get_restaurant
(latitude DECIMAL, longitude DECIMAL, distance DECIMAL) 
 RETURNS TABLE
(
 restaurant_id INTEGER
)
AS $$
BEGIN
  RETURN QUERY
  SELECT restaurant_id
  FROM kmeal.restaurant
  ORDER BY location <-> st_setsrid(st_makepoint(latitude,longitude),distance)
LIMIT 1;
END; $$

LANGUAGE 'plpgsql';
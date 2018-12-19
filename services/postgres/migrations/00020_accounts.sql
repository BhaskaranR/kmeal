-- create postgis to enable location based search

CREATE SCHEMA IF NOT EXISTS kmeal;
CREATE EXTENSION postgis;
CREATE EXTENSION postgis_topology;

CREATE TABLE IF NOT EXISTS "kmeal"."account" (
  "owner" TEXT NOT NULL PRIMARY KEY,
  "balance" DECIMAL NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
  );

CREATE TABLE IF NOT EXISTS "kmeal"."restaurant" (
  "restaurant_id" INTEGER NOT NULL PRIMARY KEY,
  "owner" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "phone"       INTEGER NOT NULL,
  "location" GEOGRAPHY(Point) NOT NULL,
  "address"     TEXT NOT NULL,
  "logo"        TEXT NOT NULL,
  "category"    TEXT NOT NULL,
  "timeofoperation" TEXT NOT NULL,
  "isactive"    BOOLEAN NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
  );

ALTER TABLE ONLY kmeal."restaurant"
  ADD CONSTRAINT owner_restaurant_fkey FOREIGN KEY ("owner") REFERENCES kmeal.account(owner);



-- create view kmeal.restaurant_location as(
-- select 
--     b.owner, 
--     b.name, 
--     b.description,
--     b.phone, b.location, b.address, b.logo, 
--     ST_Distance_Sphere(b.location::Geometry, b.location::Geometry) as distance
--   from kmeal.account a 
-- inner join 
-- kmeal.restaurant b 
-- on  
-- a.owner = b.owner
-- );

-- CREATE OR REPLACE FUNCTION kmeal.get_restaurants (latitude DECIMAL, longitude DECIMAL, distance DECIMAL) 
--  RETURNS TABLE (
--  owner VARCHAR,
--  name INT

-- ) 
-- AS $$
-- BEGIN
--  RETURN QUERY SELECT
--  title,
--  cast( release_year as integer)
--  FROM
--  film
--  WHERE
--  title ILIKE p_pattern ;
-- END; 

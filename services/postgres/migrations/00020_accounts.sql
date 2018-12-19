-- create postgis to enable location based search
-- CREATE EXTENSION postgis;
-- CREATE EXTENSION postgis_topology;

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
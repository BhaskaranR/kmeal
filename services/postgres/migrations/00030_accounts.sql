-- create postgis to enable location based search
CREATE EXTENSION postgis;
CREATE EXTENSION postgis_topology;

--default account type - customer, restaurant, driver, escrow, admin, superadmin
CREATE TABLE IF NOT EXISTS "kmeal"."account" (
  "owner" CHAR(12) NOT NULL PRIMARY KEY, -- eos accts should be 12 charaters long..
  "balance" DECIMAL NOT NULL,
  "account_type" CHAR(1) DEFAULT 'C' NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
  );

CREATE TABLE IF NOT EXISTS "kmeal"."restaurant" (
  "restaurant_id" INTEGER NOT NULL PRIMARY KEY,
  "yelp_id" INTEGER,
  "owner" CHAR(12) NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "phone"       INTEGER NOT NULL,
  "location" GEOGRAPHY(Point) NOT NULL,
  "address"     TEXT NOT NULL,
  "logo"        TEXT NOT NULL,
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


CREATE TABLE IF NOT EXISTS "kmeal"."restaurant_categories" (
  "restaurant_id" INTEGER NOT NULL,
  "category"    TEXT NOT NULL
)

ALTER TABLE ONLY kmeal."restaurant_categories"
  ADD CONSTRAINT restaurant_categories_fkey FOREIGN KEY ("restaurant_id") REFERENCES kmeal.restaurant(restaurant_id);



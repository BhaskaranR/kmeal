CREATE TABLE IF NOT EXISTS kmeal."item" (
  "item_id" INTEGER  NOT NULL PRIMARY KEY,
  "item_name" varchar(50) NOT NULL,
  "description" TEXT NOT NULL,
  "photo" varchar(50) NOT NULL,
  "restaurant_id" INTEGER NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);
ALTER TABLE ONLY kmeal."item"
  ADD CONSTRAINT restaurant_item_id_fkey FOREIGN KEY ("restaurant_id") REFERENCES kmeal.restaurant(restaurant_id);


CREATE TABLE IF NOT EXISTS kmeal."restaurant_group" (
  "group_id" INTEGER PRIMARY KEY,
  "restaurant_id" INTEGER NOT NULL REFERENCES kmeal.restaurant("restaurant_id"),
  "group_name" TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS kmeal."group" (
  "item_id" INTEGER NOT NULL REFERENCES kmeal.item("item_id"),
  "group_id" INTEGER NOT NULL REFERENCES kmeal.restaurant_group (group_id)
);

CREATE TABLE IF NOT EXISTS kmeal."item_types" (
  "item_id" INTEGER  NOT NULL,
  "item_type" TEXT  NOT NULL
);

ALTER TABLE ONLY kmeal."item_types"
  ADD CONSTRAINT item_types_id_fkey FOREIGN KEY ("item_id") REFERENCES kmeal.item("item_id");


CREATE TABLE IF NOT EXISTS kmeal."item_sides" (
  "item_id" INTEGER  NOT NULL,
  "side" TEXT  NOT NULL
);


ALTER TABLE ONLY kmeal."item_sides"
  ADD CONSTRAINT item_sides_id_fkey FOREIGN KEY ("item_id") REFERENCES kmeal.item("item_id");


 -- list type regular, dynamically priced, combo menu
CREATE TABLE IF NOT EXISTS kmeal."listing" (
  "listing_id" INTEGER NOT NULL PRIMARY KEY,
  "restaurant_id" INTEGER NOT NULL,
  "list_price" DECIMAL NOT NULL,
  "list_type" CHAR(1) DEFAULT 'R' NOT NULL,
  "isactive" BOOLEAN NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);

ALTER TABLE ONLY kmeal."listing"
  ADD CONSTRAINT restaurant_list_id_fkey FOREIGN KEY ("restaurant_id") REFERENCES kmeal.restaurant(restaurant_id);

CREATE TABLE IF NOT EXISTS kmeal."dplisting" (
  "listing_id" INTEGER NOT NULL PRIMARY KEY,
  "min_price" DECIMAL NOT NULL,
  "quantity" INTEGER NOT NULL,
  "start" INTEGER NOT NULL,
  "duration" INTEGER NOT NULL,
  "sliding_rate" INTEGER NOT NULL,
  "status" INTEGER NOT NULL
);

ALTER TABLE ONLY kmeal."dplisting"
  ADD CONSTRAINT dplisting_listing_id_fkey FOREIGN KEY ("listing_id") REFERENCES kmeal.listing("listing_id");

CREATE TABLE IF NOT EXISTS kmeal."listing_items" (
  "listing_id" INTEGER NOT NULL,
  "item_id" INTEGER  NOT NULL
);

ALTER TABLE ONLY kmeal."listing_items"
  ADD CONSTRAINT listing_items_id_fkey FOREIGN KEY ("item_id") REFERENCES kmeal.item("item_id");

ALTER TABLE ONLY kmeal."listing_items"
  ADD CONSTRAINT listings_items_listing_id_fkey FOREIGN KEY ("listing_id") REFERENCES kmeal.listing("listing_id");
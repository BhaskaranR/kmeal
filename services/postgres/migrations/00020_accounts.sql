CREATE TABLE IF NOT EXISTS kmeal."item" (
  "item_id" INTEGER  NOT NULL PRIMARY KEY,
  "item_name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "owner" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);
ALTER TABLE ONLY kmeal."item"
  ADD CONSTRAINT owner_item_id_fkey FOREIGN KEY ("owner") REFERENCES kmeal.restaurant(owner);


CREATE TABLE IF NOT EXISTS kmeal."group" (
  "item_id" INTEGER NOT NULL,
  "group_name" TEXT NOT NULL
);

ALTER TABLE ONLY kmeal."group"
  ADD CONSTRAINT group_item_id_fkey FOREIGN KEY ("item_id") REFERENCES kmeal.item("item_id");

CREATE TABLE IF NOT EXISTS kmeal."item_types" (
  "item_id" INTEGER  NOT NULL,
  "item_type" TEXT  NOT NULL,
);

ALTER TABLE ONLY kmeal."item_types"
  ADD CONSTRAINT item_types_id_fkey FOREIGN KEY ("item_id") REFERENCES kmeal.item("item_id");


CREATE TABLE IF NOT EXISTS kmeal."item_sides" (
  "item_id" INTEGER  NOT NULL,
  "side" TEXT  NOT NULL,
);


ALTER TABLE ONLY kmeal."item_sides"
  ADD CONSTRAINT item_sides_id_fkey FOREIGN KEY ("item_id") REFERENCES kmeal.item("item_id");


CREATE TABLE IF NOT EXISTS kmeal."listing" (
  "listing_id" INTEGER NOT NULL PRIMARY KEY,
  "item_id" INTEGER  NOT NULL,
  "owner" TEXT NOT NULL,
  "list_price" DECIMAL NOT NULL,
  "isactive" BOOLEAN NOT NULL,
);

ALTER TABLE ONLY kmeal."listing"
  ADD CONSTRAINT listing_id_fkey FOREIGN KEY ("item_id") REFERENCES kmeal.item("item_id");


ALTER TABLE ONLY kmeal."listing"
  ADD CONSTRAINT owner_list_id_fkey FOREIGN KEY ("owner") REFERENCES kmeal.restaurant(owner);


CREATE TABLE IF NOT EXISTS kmeal."dplisting" (
  "listing_id" INTEGER NOT NULL PRIMARY KEY,
  "item_id" INTEGER  NOT NULL,
  "owner" TEXT NOT NULL,
  "list_price" DECIMAL NOT NULL,
  "min_price" DECIMAL NOT NULL,
  "quantity" INTEGER NOT NULL,
  "start" INTEGER NOT NULL,
  "duration" INTEGER NOT NULL,
  "sliding_rate" INTEGER NOT NULL,
  "status" INTEGER NOT NULL,
  "isactive" BOOLEAN NOT NULL,
);

ALTER TABLE ONLY kmeal."dplisting"
  ADD CONSTRAINT dplisting_id_fkey FOREIGN KEY ("item_id") REFERENCES kmeal.item("item_id");


ALTER TABLE ONLY kmeal."dplisting"
  ADD CONSTRAINT owner_dplist_id_fkey FOREIGN KEY ("owner") REFERENCES kmeal.restaurant(owner);


CREATE TABLE IF NOT EXISTS kmeal."combolisting" (
  "listing_id" INTEGER NOT NULL PRIMARY KEY,
  "owner" TEXT NOT NULL,
  "list_price" DECIMAL NOT NULL,
  "isactive" BOOLEAN NOT NULL,
);

ALTER TABLE ONLY kmeal."combolisting"
  ADD CONSTRAINT owner_combolist_id_fkey FOREIGN KEY ("owner") REFERENCES kmeal.restaurant(owner);


CREATE TABLE IF NOT EXISTS kmeal."combolisting_items" (
  "listing_id" INTEGER NOT NULL,
  "item_id" INTEGER  NOT NULL,
);

ALTER TABLE ONLY kmeal."combolisting_items"
  ADD CONSTRAINT combolisting_item_id_fkey FOREIGN KEY ("item_id") REFERENCES kmeal.item("item_id");

ALTER TABLE ONLY kmeal."combolisting_items"
  ADD CONSTRAINT combolisting_id_fkey FOREIGN KEY ("list_id") REFERENCES kmeal.combolisting("listing_id");


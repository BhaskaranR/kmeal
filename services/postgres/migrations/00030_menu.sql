CREATE TABLE IF NOT EXISTS "${schema^}"."item" (
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
ALTER TABLE ONLY "${schema^}"."item"
  ADD CONSTRAINT owner_item_id_fkey FOREIGN KEY ("owner") REFERENCES "${schema^}".restaurant(owner);


CREATE TABLE IF NOT EXISTS "${schema^}"."group" (
  "item_id" INTEGER NOT NULL,
  "group_name" TEXT NOT NULL
);

ALTER TABLE ONLY "${schema^}"."group"
  ADD CONSTRAINT group_item_id_fkey FOREIGN KEY ("item_id") REFERENCES "${schema^}".item("item_id");

CREATE TABLE IF NOT EXISTS "${schema^}"."item_types" (
  "item_id" INTEGER  NOT NULL,
  "item_type" TEXT  NOT NULL,
);

ALTER TABLE ONLY "${schema^}"."item_types"
  ADD CONSTRAINT item_types_id_fkey FOREIGN KEY ("item_id") REFERENCES "${schema^}".item("item_id");


CREATE TABLE IF NOT EXISTS "${schema^}"."item_sides" (
  "item_id" INTEGER  NOT NULL,
  "side" TEXT  NOT NULL,
);


ALTER TABLE ONLY "${schema^}"."item_sides"
  ADD CONSTRAINT item_sides_id_fkey FOREIGN KEY ("item_id") REFERENCES "${schema^}".item("item_id");


CREATE TABLE IF NOT EXISTS "${schema^}"."listing" (
  "listing_id" INTEGER NOT NULL PRIMARY KEY,
  "item_id" INTEGER  NOT NULL,
  "owner" TEXT NOT NULL,
  "list_price" DECIMAL NOT NULL,
  "isactive" BOOLEAN NOT NULL,
);

ALTER TABLE ONLY "${schema^}"."listing"
  ADD CONSTRAINT listing_id_fkey FOREIGN KEY ("item_id") REFERENCES "${schema^}".item("item_id");


ALTER TABLE ONLY "${schema^}"."listing"
  ADD CONSTRAINT owner_list_id_fkey FOREIGN KEY ("owner") REFERENCES "${schema^}".restaurant(owner);


CREATE TABLE IF NOT EXISTS "${schema^}"."dplisting" (
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

ALTER TABLE ONLY "${schema^}"."dplisting"
  ADD CONSTRAINT dplisting_id_fkey FOREIGN KEY ("item_id") REFERENCES "${schema^}".item("item_id");


ALTER TABLE ONLY "${schema^}"."dplisting"
  ADD CONSTRAINT owner_dplist_id_fkey FOREIGN KEY ("owner") REFERENCES "${schema^}".restaurant(owner);


CREATE TABLE IF NOT EXISTS "${schema^}"."combolisting" (
  "listing_id" INTEGER NOT NULL PRIMARY KEY,
  "owner" TEXT NOT NULL,
  "list_price" DECIMAL NOT NULL,
  "isactive" BOOLEAN NOT NULL,
);

ALTER TABLE ONLY "${schema^}"."combolisting"
  ADD CONSTRAINT owner_combolist_id_fkey FOREIGN KEY ("owner") REFERENCES "${schema^}".restaurant(owner);


CREATE TABLE IF NOT EXISTS "${schema^}"."combolisting_items" (
  "listing_id" INTEGER NOT NULL,
  "item_id" INTEGER  NOT NULL,
);

ALTER TABLE ONLY "${schema^}"."combolisting_items"
  ADD CONSTRAINT combolisting_item_id_fkey FOREIGN KEY ("item_id") REFERENCES "${schema^}".item("item_id");

ALTER TABLE ONLY "${schema^}"."combolisting_items"
  ADD CONSTRAINT combolisting_id_fkey FOREIGN KEY ("list_id") REFERENCES "${schema^}".combolisting("listing_id");



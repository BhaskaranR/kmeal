CREATE TABLE IF NOT EXISTS kmeal."order" (
  "order_id" INTEGER  NOT NULL PRIMARY KEY,
  "buyer" CHAR(12) NOT NULL,
  "restaurant_id" INTEGER NOT NULL,
  "price" TEXT NOT NULL,
  "instructions" TEXT,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);

ALTER TABLE ONLY kmeal."order"
  ADD CONSTRAINT order_buyer_id_fkey FOREIGN KEY ("buyer") REFERENCES kmeal.account(owner);


ALTER TABLE ONLY kmeal."order"
  ADD CONSTRAINT order_restaurant_id_id_fkey FOREIGN KEY ("restaurant_id") REFERENCES kmeal.restaurant(restaurant_id);


CREATE TABLE IF NOT EXISTS kmeal."order_status" (
  "order_id" INTEGER  NOT NULL PRIMARY KEY,
  "order_status" INTEGER  NOT NULL,
  "created_at" TIMESTAMP NOT NULL
);

ALTER TABLE ONLY kmeal."order_status"
  ADD CONSTRAINT order_status_id_fkey FOREIGN KEY ("order_id") REFERENCES kmeal.order(order_id);


CREATE TABLE IF NOT EXISTS kmeal."order_detail" (
  "order_id" INTEGER  REFERENCES kmeal.order(order_id),
  "listing_id" INTEGER REFERENCES kmeal.listing(listing_id),
  "qty" INTEGER NOT NULL,
  "ordered_price" INTEGER  NOT NULL,
  "listing_type" CHAR NOT NULL,
  "instructions" TEXT
);

CREATE TABLE IF NOT EXISTS kmeal."dporder" (
  "dporder_id" INTEGER  NOT NULL PRIMARY KEY, 
  "order_id" INTEGER  REFERENCES kmeal.order(order_id),
  "buyer" TEXT NOT NULL REFERENCES kmeal.account(owner),
  "restaurant_id" INTEGER NOT NULL REFERENCES kmeal.restaurant(restaurant_id),
  "listing_id" INTEGER  NOT NULL  REFERENCES kmeal.listing(listing_id),
  "bid_price" TEXT NOT NULL,
  "instructions" TEXT,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);

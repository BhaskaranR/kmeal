CREATE TABLE IF NOT EXISTS kmeal."order" (
  "order_id" INTEGER  NOT NULL PRIMARY KEY,
  "seller" TEXT NOT NULL,
  "restaurant_id" INTEGER NOT NULL,
  "price" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);

ALTER TABLE ONLY kmeal."order"
  ADD CONSTRAINT order_seller_id_fkey FOREIGN KEY ("seller") REFERENCES kmeal.account(owner);


ALTER TABLE ONLY kmeal."order"
  ADD CONSTRAINT order_restaurant_id_id_fkey FOREIGN KEY ("restaurant_id") REFERENCES kmeal.restaurant(restaurant_id);


CREATE TABLE IF NOT EXISTS kmeal."order_status" (
  "order_id" INTEGER  NOT NULL PRIMARY KEY,
  "order_status" INTEGER  NOT NULL
);

ALTER TABLE ONLY kmeal."order_status"
  ADD CONSTRAINT order_status_id_fkey FOREIGN KEY ("order_id") REFERENCES kmeal.order(order_id);


CREATE TABLE IF NOT EXISTS kmeal."order_detail" (
  "order_id" INTEGER  NOT NULL PRIMARY KEY,
  "item_id" INTEGER  NOT NULL,
  "item_price" INTEGER  NOT NULL
);

ALTER TABLE ONLY kmeal."order_detail"
  ADD CONSTRAINT order_detail_id_fkey FOREIGN KEY ("order_id") REFERENCES kmeal.order(order_id);

CREATE TABLE IF NOT EXISTS kmeal."dporder" (
  "order_id" INTEGER  NOT NULL PRIMARY KEY,
  "seller" TEXT NOT NULL,
  "restaurant_id" INTEGER NOT NULL,
  "bid_price" TEXT NOT NULL,
  "shipping_address" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);

ALTER TABLE ONLY kmeal."dporder"
  ADD CONSTRAINT dporde_seller_id_fkey FOREIGN KEY ("seller") REFERENCES kmeal.account(owner);

ALTER TABLE ONLY kmeal."dporder"
  ADD CONSTRAINT dporder_restaurant_id_id_fkey FOREIGN KEY ("restaurant_id") REFERENCES kmeal.restaurant(restaurant_id);

CREATE TABLE IF NOT EXISTS kmeal."dporder_detail" (
  "order_id" INTEGER  NOT NULL PRIMARY KEY,
  "item_id" INTEGER  NOT NULL,
  "item_price" INTEGER  NOT NULL,
  "bid_price" TEXT NOT NULL
);

ALTER TABLE ONLY kmeal."dporder_detail"
  ADD CONSTRAINT dporder_detail_id_fkey FOREIGN KEY ("order_id") REFERENCES kmeal.dporder(order_id);

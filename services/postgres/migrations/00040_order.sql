CREATE TABLE IF NOT EXISTS kmeal."order" (
  "order_id" INTEGER  NOT NULL PRIMARY KEY,
  "seller" TEXT NOT NULL,
  "buyer" TEXT NOT NULL,
  "paid_price" TEXT NOT NULL,
  "shipping_address" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);

ALTER TABLE ONLY kmeal."order"
  ADD CONSTRAINT order_id_fkey FOREIGN KEY ("seller") REFERENCES kmeal.restaurant(owner);


ALTER TABLE ONLY kmeal."order"
  ADD CONSTRAINT order_id_fkey FOREIGN KEY ("buyer") REFERENCES kmeal.restaurant(owner);

CREATE TABLE IF NOT EXISTS kmeal."dporder" (
  "order_id" INTEGER  NOT NULL PRIMARY KEY,
  "seller" TEXT NOT NULL,
  "buyer" TEXT NOT NULL,
  "paid_price" TEXT NOT NULL,
  "shipping_address" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);

ALTER TABLE ONLY kmeal."order"
  ADD CONSTRAINT dporder_id_fkey FOREIGN KEY ("seller") REFERENCES kmeal.restaurant(owner);


ALTER TABLE ONLY kmeal."order"
  ADD CONSTRAINT dporder_id_fkey FOREIGN KEY ("buyer") REFERENCES kmeal.restaurant(owner);


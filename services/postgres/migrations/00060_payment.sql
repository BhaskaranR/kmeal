 --status of payment
CREATE TABLE IF NOT EXISTS kmeal."payment" (
    payment_id INTEGER NOT NULL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    payment_status CHAR(1),
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);

ALTER TABLE ONLY kmeal."payment"
  ADD CONSTRAINT payment_order_id_fkey FOREIGN KEY ("order_id") REFERENCES kmeal.order(order_id);

CREATE TABLE IF NOT EXISTS kmeal."payment" (
    payment_id INTEGER NOT NULL PRIMARY KEY,
    order_id INTEGER NOT NULL
)

ALTER TABLE ONLY kmeal."payment"
  ADD CONSTRAINT order_id_fkey FOREIGN KEY ("order_id") REFERENCES kmeal.order(order_id);

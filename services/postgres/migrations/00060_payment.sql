 --status of payment
CREATE TABLE IF NOT EXISTS kmeal."payment" (
    payment_id INTEGER NOT NULL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    payment_status CHAR(1)
);

ALTER TABLE ONLY kmeal."payment"
  ADD CONSTRAINT payment_order_id_fkey FOREIGN KEY ("order_id") REFERENCES kmeal.order(order_id);

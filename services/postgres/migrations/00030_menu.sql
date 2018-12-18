
CREATE TABLE IF NOT EXISTS "${schema^}"."group" (
  "group_id" INTEGER NOT NULL,
  "group_name" TEXT NOT NULL,
  "owner" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "${schema^}"."item" (
  "item_id" INTEGER  NOT NULL,
  "item_name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "group_id" INTEGER NOT NULL,
  "owner" TEXT NOT NULL,
  "owner" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);


CREATE TABLE IF NOT EXISTS "${schema^}"."listing" (
  "item_id" INTEGER  NOT NULL,
  "item_name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "group_id" INTEGER NOT NULL,
  "owner" TEXT NOT NULL,
  "owner" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
);
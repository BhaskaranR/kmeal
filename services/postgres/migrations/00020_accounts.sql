
CREATE TABLE IF NOT EXISTS "${schema^}"."customer" (
  "owner" TEXT NOT NULL PRIMARY KEY,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
  );

CREATE TABLE IF NOT EXISTS "${schema^}"."restaurant" (
  "owner" TEXT NOT NULL PRIMARY KEY,
  "description" TEXT NOT NULL,
  "phone"       INTEGER NOT NULL,
  "location"    TEXT NOT NULL,
  "address"     TEXT NOT NULL,
  "logo"        TEXT NOT NULL,
  "category"    TEXT NOT NULL,
  "timeofoperation" TEXT NOT NULL,
  "isactive"    BOOLEAN NOT NULL,
  "created_at" TIMESTAMP NOT NULL,
  "created_block" BIGINT NOT NULL,
  "created_trx" TEXT NOT NULL,
  "created_eosacc" TEXT NOT NULL,
  "_dmx_created_at" TIMESTAMP DEFAULT current_timestamp NOT NULL
  );

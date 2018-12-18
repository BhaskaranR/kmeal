#include <eosiolib/eosio.hpp>

using namespace eosio;

namespace kmeal {
// @abi table items
struct item {
  uint64_t         item_id;
  account_name     owner;
  string           item_name;
  string           description;
  vector<string>   types;
  vector<uint64_t> sides;
  string           group;
  uint64_t         primary_key() const { return item_id; }

  EOSLIB_SERIALIZE(item, (item_id)(owner)(item_name)(description)(types)(sides)(group))
};
typedef eosio::multi_index<N(items), item> item_table;

// @abi table listings
struct listing {
  uint64_t listing_id;
  uint64_t item_id;
  account_name owner;
  asset    list_price;
  bool     isactive; // activated user
  uint64_t primary_key() const { return listing_id; }

  EOSLIB_SERIALIZE(listing, (listing_id)(owner)(item_id)(list_price)(isactive))
};

typedef eosio::multi_index<N(listings), listing> listing_table;

// @abi table dynamic listings
struct dplisting {
  uint64_t     listing_id;
  uint64_t     item_id;
  account_name owner;
  asset        list_price;
  asset        min_price;
  uint64_t     quantity;
  uint32_t     start    = 0; // start from
  uint32_t     duration = 0; // event duration
  uint64_t     sliding_rate;
  uint64_t     status;
  bool         isactive;

  uint32_t get_end() const { return start + duration; }

  bool is_dp_period(uint32_t now) const { return (start <= now) && (now < get_end()); }

  uint64_t primary_key() const { return listing_id; }


  EOSLIB_SERIALIZE(dplisting, (listing_id)(item_id)(owner)(list_price)(min_price)(quantity)(start)(duration)(sliding_rate)(status)(isactive))
};

typedef eosio::multi_index<N(dynamiclistings), dynamiclisting> dynamic_listing_table;

struct combolisting {
  uint64_t         listing_id;
  vector<uint64_t> items;
  account_name     owner;
  asset           list_price;
  bool     isactive; 
  uint64_t primary_key() const { return listing_id; }

  EOSLIB_SERIALIZE(listing, (listing_id)(item_id)(owner)(list_price)(isactive))
}

// // @abi table inventories
// struct inventory {
//   account_name     owner;
//   vector<uint64_t> items;
//   vector<uint64_t> dpitems;
//   vector<uint64_t> comboitems;

//   uint64_t primary_key() const { return owner; }

// };

// typedef eosio::multi_index<N(inventories), inventory> inventory_table;

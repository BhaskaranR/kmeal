#pragma once

using namespace eosio;

namespace kmeal
{

// @abi table orders
struct order
{
    uint64_t order_id;
    account_name seller;
    account_name buyer;
    asset paid_price;
    string shipping_address;
    uint8_t status;

    uint64_t primary_key() const { return order_id; }
};

typedef eosio::multi_index<N(orders), order> order_table;

// @abi table dp orders
struct dporder
{
    uint64_t order_id;
    account_name seller;
    account_name buyer;
    asset price;
    string address;
    uint8_t status;
    time created; // create time
    time updated; // update time
    uint64_t primary_key() const { return order_id; }
};

typedef eosio::multi_index<N(dporders), dporder> dporder_table;

} // namespace kmeal

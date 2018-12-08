#pragma once

#include "models/menu_index.hpp"

using namespace std;
using namespace eosio;

namespace kmeal
{
class kmeal_menu
{
  private:
    account_name self;

  public:
    kmeal_logging(account_name _self) : self(_self){};

    void kmeal::neworder(const uint64_t item_id,
                         const account_name seller,
                         const account_name buyer,
                         const asset paid_price)
    {
        //todo validation restaurant owner cannot order for himself..
        order_table o_t(_self, _self);
        o_t.emplace(_self, [&](auto &o) {
            o.order_id = o_t.available_primary_key();
            o.seller = seller;
            o.buyer = buyer;
            o.status = OPENED;
        });
    }


    void cancelorder(uint64_t order_id)
    {
        //todo one who ordered needs to cancel require auth..
        time current_time = now();
        //cannot cancel when the meal is prepared..

    }

    void updateorderstatus(account_name account, uint64_t order_id, uint64_t status)
    {
        //todo auth..
        time current_time = now();
    }

    void kmeal::newdporder(const uint64_t item_id,
                         const account_name seller,
                         const account_name buyer,
                         const asset paid_price,
                         )
    {
        //todo auth..
        order_table o_t(_self, _self);
        o_t.emplace(_self, [&](auto &o) {
            o.order_id = o_t.available_primary_key();
            o.seller = seller;
            o.buyer = buyer;
            o.status = OPENED;
        });
    }


    void kmeal::canceldporder(const uint64_t item_id,
                         const account_name seller,
                         const account_name buyer,
                         const asset paid_price,
                         )
    {
        //todo auth..
    }

    void kmeal::newdporder(const uint64_t item_id,
                         const account_name seller,
                         const account_name buyer,
                         const asset paid_price,
                         )
    {
        //todo auth..
        order_table o_t(_self, _self);
        o_t.emplace(_self, [&](auto &o) {
            o.order_id = o_t.available_primary_key();
            o.seller = seller;
            o.buyer = buyer;
            o.status = OPENED;
        });
    }

    void kmeal::canceldporder(const uint64_t item_id,
                         const account_name seller,
                         const account_name buyer,
                         const asset paid_price,
                         )
    {
        order_table o_t(_self, _self);
        o_t.emplace(_self, [&](auto &o) {
            o.order_id = o_t.available_primary_key();
            o.seller = seller;
            o.buyer = buyer;
            o.status = OPENED;
        });
    }

    
    
}

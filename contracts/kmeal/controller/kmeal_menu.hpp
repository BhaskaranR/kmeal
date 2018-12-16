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

    enum class itemType : uint64_t
    {
        ITEM = 0,
        DPITEM
    };

  public:
    kmeal_logging(account_name _self) : self(_self){};

    void kmeal::newitem(
                        const name from,
                        const string item_name,
                        const string description,
                        const vector<uint64_t> sides,
                        const string group)
    {
        //todo validation only restaurant owner can create a new item
        item_table i_t(_self, _self);
        i_t.emplace(_self, [&](auto &i) {
            i.item_id = i_t.available_primary_key();
            i.sides = sides;
            i.description = description;
            i.item_name = item_name;
            i.group = group;
        });
    }

    void kmeal::removeitem(account_name account, const uint64_t id)
    {
        require_auth(account);
//todo validation only restaurant owner can remove the item
        item_table items(_self, _self);
        auto iterator = items.find(id);
        eosio_assert(iterator != items.end(), "Product not found");
        eosio_assert(iterator->seller  == account, "You are not the owner");

        item_table items(_self, _self);
        auto iterator = items.find(id);


        items.erase(iterator);
    }

    void kmeal::newlisting(const uint64_t item_id,
                           const account_name seller,
                           const asset list_price)
    {

        //todo validation only restaurant owner can create a new listing
        listing_table l_t(_self, _self);
        l_t.emplace(_self, [&](auto &l) {
            l.listing_id = l_t.available_primary_key();
            l.item_id = item_id;
            l.seller = seller;
            l.list_price = list_price;
        });
    }

    void kmeal::newdplisting(const uint64_t item_id,
                             const account_name seller,
                             const asset list_price,
                             const asset quantity,
                             const uint64_t expirytime,
                             const uint64_t rate,
                             const uint64_t status)
    {
        //todo validation only restaurant owner can create a new listing
        //todo validation check if the item is already in the list for the time..
        dynamic_listing_table l_t(_self, _self);
        l_t.emplace(_self, [&](auto &l) {
            l.listing_id = l_t.available_primary_key();
            l.item_id = item_id;
            l.seller = seller;
            l.list_price = list_price;
            l.quantity = quantity;
            l.expirytime = empirytime;
            l.rate = rate;
            l.status = status;
        });
    }

    void kmeal::additem(const account_name owner,
                        const uint64_t item_id, const uint64_t item_type)
    {
        //todo see if it requires a api.. or a internal call..
        inventory_table i_t(_self, _self);
        auto i_itr = i_t.find(owner);
        if (i_itr == i_t.end())
        {
            i_t.emplace(_self, [&](auto &i) {
                if (item_type == ITEM)
                {
                    i.items.push_back(item_id);
                }
                else
                {
                    i.dpitems.push_back(item_id);
                }
            });
        }
        else
        {
            i_t.modify(i_itr, _self, [&](auto &i) {
                i.owner = owner;
                if (item_type == ITEM)
                {
                    i.items.push_back(item_id);
                }
                else
                {
                    i.dpitems.push_back(item_id);
                }
            });
        }
    }
}

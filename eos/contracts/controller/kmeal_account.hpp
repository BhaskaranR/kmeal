#pragma once

#include "models/kmeal_account_index.hpp"

using namespace std;
using namespace eosio;

namespace kmeal
{
class kmeal_account
{
  private:
    account_name self;

    enum class userType : uint64_t
    {
        CUSTOMER = 0,
        RESTAURANT,
        DRIVER
    };

  public:
    kmeal_account(account_name _self) : self(_self){};

    void createrestaurant(account_name account, string idx, string pubkey, string name, uint8_t phone, string address, coordinates location, string logo, string category, string timeofoperation)
    {
        //require auth
        //todo cant have same account as customer or driver..
        time current_time = now();

        restaurantIndex pix(self, account);
        pix.emplace(self, [&](auto &s) {
            s.account = account;
            s.pubkey = pubkey;
            s.idx = idx;
            s.name = name;
            s.phone = phone;
            s.address = address;
            s.location = location;
            s.logo = logo;
            s.category = category;
            s.timeofoperation = timeofoperation;
            s.isactive = true;
            s.created = current_time;
            s.updated = current_time;
        });
    }

    void createcustomer(account_name account, string idx, string pubkey, string name, uint8_t phone, string address, string avatar)
    {
        //require auth
        //todo cant have same account as  restaurant or driver..
        time current_time = now();

        customerIndex pix(self, account);
        pix.emplace(self, [&](auto &s) {
            s.account = account;
            s.pubkey = pubkey;
            s.idx = idx;
            s.name = name;
            s.phone = phone;
            s.address = address;
            s.avatar = avatar;
            s.isactive = true;
            s.created = current_time;
            s.updated = current_time;
        });
    }

    void createdriver(account_name account, string idx, string pubkey, string name, uint8_t phone, coordinates location, string avatar)
    {
        //require auth
        //todo cant have same account as restaurant or driver..
        time current_time = now();

        driverIndex pix(self, account);
        pix.emplace(self, [&](auto &s) {
            s.account = account;
            s.pubkey = pubkey;
            s.idx = idx;
            s.name = name;
            s.phone = phone;
            s.avatar = avatar;
            s.location = location;
            s.isactive = true;
            s.created = current_time;
            s.updated = current_time;
        });
    }

    void update_account(account_name account, string pubkey, string uidx, string idx, uint8_t usertype)
    {
        //require auth

        // time current_time = now();

        // profileIndex pix( self, account );

        // auto itr = pix.find( account );
        // eosio_assert( itr != pix.end(), "can not found account" );

        // pix.modify( itr, self, [&]( auto& s ) {
        //     s.uidx = uidx;
        //     s.pubkey = pubkey;
        //     s.idx = idx;
        //     s.bandwidth = bandwidth;
        //     s.memory = memory;
        //     s.cpu = cpu;
        //     s.disk = disk;
        //     s.networktype = networktype;
        //     s.usertype = usertype;
        //     s.isactive = true;
        //     s.updated = current_time;
        // });
    }

    void change_activate(account_name account, bool isactive)
    {
        //require auth
        eosio_assert(usertype == CUSTOMER || usertype == RESTAURANT || usertype == DRIVER, "could not find user");
        time current_time = now();
        customerIndex pix(self, account);
        auto itr = pix.find(account);
        if (itr != pix.end())
        {
            pix.modify(itr, self, [&](auto &s) {
                s.isactive = isactive;
                s.updated = current_time;
            });
        }
        restaurantIndex pix(self, account);
        auto itr = pix.find(account);
        if (itr != pix.end())
        {
            pix.modify(itr, self, [&](auto &s) {
                s.isactive = isactive;
                s.updated = current_time;
            });
        }
        driverIndex pix(self, account);
        auto itr = pix.find(account);
        if (itr != pix.end())
        {
            pix.modify(itr, self, [&](auto &s) {
                s.isactive = isactive;
                s.updated = current_time;
            });
        }
    }
};
} // namespace kmeal
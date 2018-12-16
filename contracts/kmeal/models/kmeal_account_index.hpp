#pragma once

using namespace std;
using namespace eosio;

namespace kmeal
{

    struct coordinates
    {
        float lat;
        float lng;
    }

    //@abi table restaurant i64
    struct restaurant
    {
        account_name account; // eos account name
        string idx;           // unique profile number
        string pubkey;        // user public key ( encrypt kmeal public key )
        string name;
        uint8_t phone;
        string address;
        coordinates location;
        string logo;
        string category;
        string timeofoperation;
        bool isactive; // activated user
        time created;  // create time
        time updated;  // update time

        uint64_t primary_key() const { return account; }

        EOSLIB_SERIALIZE(restaurant, (account)(idx)(pubkey)(name)(phone)(address)(location)(logo)(category)(timeofoperation)(isactive)(created)(updated))
    };

    typedef multi_index<N(restaurant), restaurant> restaurantIndex;

    //@abi table customer i64
    struct customer
    {
        account_name account; // eos account name
        string idx;           // unique profile number
        string pubkey;        // user public key ( encrypt kmeal public key )
        string name;
        uint8_t phone;
        string address;
        string avatar;
        bool isactive; // activated user
        time created;  // create time
        time updated;  // update time

        uint64_t primary_key() const { return account; }

        EOSLIB_SERIALIZE(customer, (account)(idx)(pubkey)(name)(phone)(address)(avatar)(isactive)(created)(updated))
    };
    typedef multi_index<N(customer), customer> customerIndex;

    //@abi table driver i64
    struct driver
    {
        account_name account; // eos account name
        string idx;           // unique profile number
        string pubkey;        // user public key ( encrypt kmeal public key )
        string name;
        uint8_t phone;
        coordinates location;
        string avatar;
        bool isactive; // activated user
        time created;  // create time
        time updated;  // update time

        uint64_t primary_key() const { return account; }

        EOSLIB_SERIALIZE(driver, (account)(idx)(pubkey)(name)(phone)(location)(avatar)(isactive)(created)(updated))
    };
    typedef multi_index<N(driver), driver> driverIndex;
} // namespace kmeal

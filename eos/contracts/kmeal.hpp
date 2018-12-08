#pragma once

#include <eosiolib/asset.hpp>
#include <eosiolib/eosio.hpp>
#include <eosiolib/transaction.hpp>


#include "controller/kmeal_account.hpp"

#include "models/account_index.hpp"
#include "models/currency_index.hpp"
#include "models/amount_index.hpp"
#include "models/pool_index.hpp"
#include "models/pricing_index.hpp"
#include "models/stake_index.hpp"
#include "models/total_index.hpp"

#include "define.hpp"

using namespace kmeal;
using namespace eosio;
using namespace std;

namespace kmeal {
    class kmeal : public contract {
        private:
            using contract::contract;

            kmeal_account  account_controller;
        public:
            kmeal( account_name self ) : contract( self )
            , account_controller( _self ) { };

            //@abi action
            void debug( account_name account );

            //@abi action
            void create( asset maximum_supply );
            //@abi action
            void issue( asset quantity, string memo );
            //@abi action
            void transfer( account_name from, account_name to, asset quantity, string memo );
            //@abi action
            void reward( account_name account, asset quantity, string memo );
            //@abi action
            void burn( account_name account, asset quantity, string memo );

            inline asset get_supply( symbol_name sym )const;
            inline asset get_balance( account_name owner, symbol_name sym )const;

        private:
            typedef multi_index<N(accounts), account> accounts;
            typedef multi_index<N(stat), currency> stats;

            typedef multi_index<N(pool), pool> poolIndex;
            typedef multi_index<N(pricing), pricing> pricingIndex;

            typedef multi_index<N(stake), stake> stakeIndex;
            typedef multi_index<N(amount), amount> amountIndex;
            typedef multi_index<N(total), total> totalIndex;

            void auth( account_name account );
            void sub_balance( account_name owner, asset value );
            void add_balance( account_name owner, asset value, account_name ram_payer );
            void add_total_volume( uint8_t resource, uint64_t volume, uint64_t u_volume );

            uint64_t get_cap( uint8_t resource, asset quantity );
            uint64_t get_resource( uint8_t resource );
            void add_total_staking( uint8_t resource, uint64_t staking );
            void addstake( account_name from, account_name to, uint8_t resource, uint64_t staking, asset balance );
            void addamount( account_name account, uint8_t resource, uint64_t staking, asset balance );
            void subamount( account_name account, uint8_t resource, asset balance, uint64_t staking );

        public:
            //@abi action
            void createrestaurant(account_name account, string idx, string pubkey, string name, uint8_t phone, string address, coordinates location, string logo, string category, string timeofoperation) {
                require_auth( account );
                account_controller.createrestaurant(account, idx, pubkey, name, phone, address, location, logo, category, timeofoperation);
            }

            //@abi action
            void createcustomer(account_name account, string idx, string pubkey, string name, uint8_t phone, string address, string avatar)
                require_auth( account );
                account_controller.createcustomer(account, idx, pubkey, name, phone, address, avatar)
            }

            //@abi action
            void createdriver(account_name account, string idx, string pubkey, string name, uint8_t phone, coordinates location, string avatar)
                require_auth( account );
                account_controller.createdriver(account, idx, pubkey, name, phone, location, avatar)
            }

            //@abi action
            void reset( account_name account, string pubkey, string uidx, string idx, uint64_t bandwidth, uint64_t memory, uint64_t cpu, uint64_t disk, uint8_t networktype, uint8_t usertype ) {
                require_auth( account );
                account_controller.reset_account( account, pubkey, uidx, idx, bandwidth, cpu, memory, disk, networktype, usertype );
            }

            //@abi action
            void activate( account_name account, bool isactive ) {
                require_auth( account );
                account_controller.change_activate( account, isactive );
            }

            //@abi action
            void regpool( account_name account, uint8_t resource, uint64_t volume );
            //@abi action
            void staking( account_name from, account_name to, uint8_t resource, asset quantity );
            //@abi action
            void unstaking( account_name from, account_name to, uint64_t key, uint8_t resource );
            //@abi action
            void price( uint8_t resource, asset price );

    };
}

set -o errexit

FILE=./keys.txt

echo "Keys file" > $FILE

echo "\n" >> $FILE
echo "Producer account" >> $FILE
cleos wallet create --to-console -n eosiomain >> $FILE
cleos wallet import -n eosiomain --private-key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

echo "\n" >> $FILE

echo "Default account" >> $FILE
cleos wallet create -n default --to-console >> $FILE

# Create alice account
cleos wallet import -n default --private-key 5Kcu8cbdyjTXD5e1QsRLmX6JYqGMC9mSRsFgDwKPk48j4MmPyBW
cleos create account eosio alice EOS7yHr8Hd55v4GVs6QTMrAiK3x1g89sMRMgkxvTw4TrrSzExmTdv EOS7yHr8Hd55v4GVs6QTMrAiK3x1g89sMRMgkxvTw4TrrSzExmTdv

# Create bob account
cleos wallet import -n default --private-key 5JofWdxYbzV6ipNmEdiaZibVxg9GYMLAFiKEWiYSuz3YEEHJHbb
cleos create account eosio bob EOS8Ke736LWfLfXdw4vFVYGG3Hf5iVDJhdPherwA7P9nuxdKaUfz7 EOS8Ke736LWfLfXdw4vFVYGG3Hf5iVDJhdPherwA7P9nuxdKaUfz7

# Create charly account
cleos wallet import -n default --private-key 5KTFEy1p9fSAbm1dJaMh5Nd3tDMKtY5k93uYNXxisyKi9RZCJgx
cleos create account eosio charly EOS6EeXqdYC7jmuATwjfY5Lx1RpAYc533xGispe391s1ZTJGa4Bzt EOS6EeXqdYC7jmuATwjfY5Lx1RpAYc533xGispe391s1ZTJGa4Bzt

account:create eosio.token
cleos set contract eosio.token /contracts/eosio.token -p eosio.token

cleos push action eosio.token create '{"issuer":"eosio", "maximum_supply":"1000000000.0000 EOS"}' -p eosio.token@active
cleos push action eosio.token issue '[ "alice", "100.0000 EOS", "memo" ]' -p eosio

#account:create eosio.system
#cleos set contract eosio.system /contracts/eosio.system -p eosio.system

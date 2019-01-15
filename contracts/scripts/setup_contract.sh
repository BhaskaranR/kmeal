set -o errexit

if [ -n "$1" ];
then
CONTRACT_ACCOUNT=$1
else
CONTRACT_ACCOUNT=example
fi

if [ -n "$2" ];
then
CONTRACT_NAME=$2
else
CONTRACT_NAME=example
fi

TOKEN_SYMBOL=PST
CONTRACT_PRIV=5JKU9mEsvNEzQ7MsGMB8yqVsCXCPhvwiwwt6HgZmJRJGViucVT8
CONTRACT_PUB=EOS8YtHXqYuAvFSGbkSYzxWuRPXPLeWVsjRLEjw1fgQAMYjvLZ66p

cleos wallet import -n default --private-key "$CONTRACT_PRIV"
cleos create account eosio "$CONTRACT_ACCOUNT" "$CONTRACT_PUB" "$CONTRACT_PUB"

contract:deploy "$CONTRACT_NAME" "$CONTRACT_ACCOUNT"

cleos push action eosio.token create '{"issuer":"eosio", "maximum_supply":"1000000000.0000 '"$TOKEN_SYMBOL"'"}' -p eosio.token@active
cleos push action eosio.token issue '[ "'"$CONTRACT_ACCOUNT"'", "1000000000.0000 '"$TOKEN_SYMBOL"'", "" ]' -p eosio

cleos set account permission "$CONTRACT_NAME" active '{"threshold": 1,"keys": [{"key": "'"$CONTRACT_PUB"'","weight": 1}], "accounts": [{"permission":{"actor":"'"example"'","permission":"eosio.code"},"weight":1}]}' -p "$CONTRACT_NAME"@owner
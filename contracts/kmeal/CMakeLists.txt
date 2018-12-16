cmake_minimum_required(VERSION 3.5)
project(kmeal VERSION 1.0.0)

find_package(eosio.cdt)

### Only generate the wasm
#add_executable( kmeal.wasm kmeal.cpp )

### Generate the wasm and abi
add_contract( kmeal kmeal kmeal.cpp )

const { Sequelize } = require("sequelize");
const faker = require("faker");
const POSTGRES_CONNECTION_STRING = process.env.POSTGRES_CONNECTION_STRING ||
    "postgres://dchnfekxwexvaa:5a7b2e17635b48fb319b2aefd26748abc51314d6abb299cb65aa0f8e5e60cbbb@ec2-184-72-239-186.compute-1.amazonaws.com:5432/dfkfhjbukjsco8";

async function importIntoDatabase(vals) {
    try {
        const sequelize = new Sequelize(
            POSTGRES_CONNECTION_STRING, {
                dialect: 'postgres',
                protocol: 'postgres',
                dialectOptions: {
                    ssl: true
                }
            }
        );
        const seqcount = await getCount(sequelize);
        const ctr = parseInt(seqcount[0].count);
        for (var i = 0; i < vals.length; i++) {

            const owner = faker.random.alphaNumeric(12);
            const restaurantId = i + ctr + 1;
            const restaurantAlreadyExistsCount = await getIfRestaurantAlreadyExists(sequelize, vals[i].name);
            if (parseInt(restaurantAlreadyExistsCount[0].count) <= 0) {
                await insert({
                    owner: owner,
                    balance: 100,
                    account_type: 'r',
                    _dmx_created_at: faker.date.past(10),
                    restaurant_id: i + ctr + 1,
                    yelp_id: vals[i].id,
                    name: vals[i].name,
                    description: vals[i].attributes || vals[i].categories.map(c => c.alias).join(','),
                    phone: vals[i].phone,
                    address: vals[i].location.formatted_address,
                    logo: vals[i].photos[0],
                    rating: vals[i].rating,
                    timeofoperation: 'REGULAR',// vals[i].hours[0].hours_type,
                    isactive: true,
                    created_at: faker.date.past(10),
                    created_trx: faker.random.alphaNumeric(85),
                    created_block: faker.random.number(100000),
                    created_eosacc: owner,
                    latitude: vals[i].coordinates.latitude,
                    longitude: vals[i].coordinates.longitude
                }, sequelize)
                await update(sequelize);
                for (var j = 0; j < vals[i].categories.length; j++) {
                    await insertcategories({
                        restaurant_id: restaurantId,
                        category: vals[i].categories[j].alias
                    }, sequelize)
                }
            }

        }
    }
    catch (e) {
        throw e;
    }
    finally {
        sequelize.close();
    }
}

async function getIfRestaurantAlreadyExists(sequelize, name) {
    return await sequelize.query("select count(*) from kmeal.restaurant where name =:name", {
        type: sequelize.QueryTypes.SELECT,
        replacements: {
            name: name
        }
    });

}

async function getCount(sequelize) {
    return await sequelize.query("select COALESCE(max(restaurant_id), 0) as count from kmeal.restaurant ", { type: sequelize.QueryTypes.SELECT });
}

async function insert({
    owner, balance, account_type, _dmx_created_at, restaurant_id, yelp_id, name, description, phone,
    latitude, longitude, address, logo, timeofoperation, isactive, rating,
    created_at, created_block, created_trx, created_eosacc
}, sequelize) {
    try {

        var res = await sequelize.query('BEGIN;' +
            'insert into kmeal.account (owner, balance, account_type, created_at, created_block, created_trx, created_eosacc, _dmx_created_at)' +
            'values(:owner, :balance, :account_type, :created_at, :created_block, :created_trx, :created_eosacc, :_dmx_created_at ); ' +
            'insert into kmeal.restaurant (restaurant_id, yelp_id,  owner,  name,  description,  phone,  latitude, longitude, address, logo,   timeofoperation,  isactive, rating,  created_at,  created_block,  created_trx,  created_eosacc,  _dmx_created_at)' +
            'values(:restaurant_id, :yelp_id,  :owner,  :name, :description, :phone, :latitude, :longitude, :address, :logo, :timeofoperation, :isactive, :rating, :created_at, :created_block, :created_trx, :created_eosacc, :_dmx_created_at);' +
            'COMMIT;',
            {
                replacements: {
                    owner: owner,
                    balance: balance,
                    account_type: account_type,
                    _dmx_created_at: _dmx_created_at,
                    restaurant_id: restaurant_id,
                    yelp_id: yelp_id,
                    name: name,
                    description: description,
                    phone: phone,
                    latitude: latitude,
                    longitude: longitude,
                    address: address,
                    logo: logo,
                    rating: rating,
                    timeofoperation: timeofoperation,
                    isactive: isactive,
                    created_at: created_at,
                    created_block: created_block,
                    created_trx: created_trx,
                    created_eosacc: created_eosacc,
                }
            }

        );
        return res;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
}

async function update(sequelize) {
    try {
        var res = await sequelize.query('BEGIN;' +
            'update kmeal.restaurant set location= ST_SetSRID(ST_MakePoint(longitude, latitude), 4326);' +
            'COMMIT;'
        );
        return res;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
}



async function insertcategories({
    restaurant_id, category
}, sequelize) {
    try {
        var res = await sequelize.query('BEGIN;' +
            'insert into kmeal.restaurant_categories (restaurant_id, category)' +
            'values(:restaurant_id, :category);' +
            'COMMIT;',
            {
                replacements: {
                    restaurant_id: restaurant_id,
                    category: category
                }
            }

        );
        return res;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
}
exports.importIntoDatabase = importIntoDatabase;
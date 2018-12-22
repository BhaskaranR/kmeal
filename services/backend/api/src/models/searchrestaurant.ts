import * as Sequelize from "sequelize";

const POSTGRES_CONNECTION_STRING = process.env.POSTGRES_CONNECTION_STRING || "postgres://postgres:password@localhost:6432/postgres";

export async function getRestaurant(nearby: {
    lat: number,
    long: number,
    maxDistance: number,
    limit: number
}){
    var sequelize = new Sequelize(
        POSTGRES_CONNECTION_STRING, {}
    );
    try {
        console.log(nearby);
     
        // var driverId = getRandomDriver();
        // var res = await sequelize.query('BEGIN;' +
        //                             'INSERT INTO assignment (order_id, driver_id) values (:orderId, :driverId); ' +
        //                             'UPDATE orders SET driver_assigned=true WHERE order_id = :orderId ;' +
        //                             'COMMIT;',
        //                             { replacements: { orderId: order.order_id, driverId: driverId } }
        //                            );
        //return res;
    } catch(e) {
        console.log(e);
        throw new Error(e);
    } finally {
	      sequelize.close();
    }
}

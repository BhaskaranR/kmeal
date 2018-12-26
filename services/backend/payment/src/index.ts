import Sequelize from "sequelize";

const POSTGRES_CONNECTION_STRING = process.env.POSTGRES_CONNECTION_STRING || "postgres://postgres:password@localhost:6432/postgres";

export async function makePayment(paymentReq: any) {
    try {
        var sequelize = new Sequelize(
            POSTGRES_CONNECTION_STRING, {}
        );
        var res = await sequelize.query('BEGIN;' +
                                    'INSERT INTO payments(order_id, amount, type) values (:orderId, :amount, :type); ' +
                                    'UPDATE orders SET payment_valid=true WHERE order_id = :orderId; ' +
                                    'COMMIT;',
                                        { replacements: { orderId: paymentReq.order_id, amount: paymentReq.metadata.amount, type: paymentReq.metadata.type } }
                                       );
        return res;
    } catch(e) {
        console.log(e);
        throw new Error(e);
    } finally {
	      sequelize.close();
    }
}


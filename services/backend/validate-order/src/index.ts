import Sequelize from "sequelize";

const POSTGRES_CONNECTION_STRING = process.env.POSTGRES_CONNECTION_STRING || "postgres://postgres:password@localhost:6432/postgres";

function performValidation(order: any){
    return true;
}

export async function validateOrder(order: any) {
    try {
        var sequelize = new Sequelize(
            POSTGRES_CONNECTION_STRING, {}
        );
        var isValid = performValidation(order);
        var res = await sequelize.query('UPDATE orders SET order_valid = :isValid WHERE order_id = :orderId',
                                    { replacements: { isValid: isValid, orderId: order.order_id } }
                                       );
        return res;
    } catch(e) {
        console.log(e);
        throw new Error(e);
    } finally {
	    sequelize.close();
    }
}


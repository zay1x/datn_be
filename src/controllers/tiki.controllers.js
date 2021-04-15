const TikiServices = require("../services/tiki.services");
const statusCodes = require("../errors/statusCodes");

const getDiscountCodesByCategoryFromEcommerce = async (req, res) => {
    const { error, discountCodes } = await TikiServices.getDiscountCodesByCategoryFromEcommerce(req);
    if (error) {
        return res.status(statusCodes.INTERNAL_SERVER_ERROR).send({ error });
    }
    res.status(statusCodes.OK).send({ discountCodes });
};

module.exports = {
    getDiscountCodesByCategoryFromEcommerce,
};
const miscRouter = require('express').Router();
const miscController = require('./misc.controller');
const bodyParser = require('body-parser');

miscRouter.use(bodyParser.json());

miscRouter.route('/:country/cities').get(miscController.getCitiesOfCountry);

miscRouter.route('/countries').get(miscController.getCountries);

miscRouter.route('/paymentRequest').post(miscController.addPaymentRequest);

module.exports = miscRouter;

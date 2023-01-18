const router = require('express').Router();

const apiRoutes = require('./api');
const browserRoutes = require('./browserRoutes');

router.use('/api', apiRoutes);
router.use('/', browserRoutes);

module.exports = router;
const router = require('express').Router();

const apiRoutes = require('./api');
const browserRoutes = require('./browserRoutes');

router.use('/', browserRoutes);
router.use('/api', apiRoutes);

module.exports = router;
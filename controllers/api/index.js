const router = require('express').Router();
const userRoutes = require('./userRoutes');
const journalRoutes = require('./journalRoutes');
const questionnaireRoutes = require('./questionnaireRoutes');
const storyRoutes = require('./storyRoutes');
const graphRoute = require('./graphRoute');

router.use('/users', userRoutes);
router.use('/journal', journalRoutes);
router.use('/questionnaire', questionnaireRoutes);
router.use('/stories', storyRoutes);
router.use('/graphRoute', graphRoute);

module.exports = router;
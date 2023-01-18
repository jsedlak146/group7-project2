const router = require('express').Router();
const userRoutes = require('./userRoutes');
const journalRoutes = require('./journalRoutes');
const questionnaireRoutes = require('./questionnaireRoutes');
const storyRoutes = require('./storyRoutes');

router.use('/users', userRoutes);
router.use('/journal', journalRoutes);
router.use('/questionnaire', questionnaireRoutes);
router.use('/stories', storyRoutes);

module.exports = router;
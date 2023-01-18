const router = require('express').Router();
const { QuitPlan } = require('../../models');
const withAuth = require('../..//utils/auth');

router.post('/newQuitPlan', withAuth, async (req, res) => {
    try {
        const newPlan = await QuitPlan.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPlan);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
const router = require('express').Router();
const { UserStories } = require('../../models');
const withAuth = require('../..//utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newStory = await UserStories.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newStory);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
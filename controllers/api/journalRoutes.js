const router = require('express').Router();
const { DailyForm } = require('../../models');
const withAuth = require('../..//utils/auth');

router.post('/', withAuth, async (req, res) => {
    console.table(req.body)
    try {
        console.log("jingle")
        const newForm = await DailyForm.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        console.log(newForm)
        res.status(200).json(newForm);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;


const router = require('express').Router();
const { User, DailyForm, QuitPlan, UserStories } = require('../models');
const withAuth = require('../utils/auth');

router.get('/allstories', async (req, res) => {
    try {

      const allStories = await UserStories.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });

      const stories = allStories.map((story) => story.get({ plain: true }));
  
      res.render('landingpage', { stories });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/profilequitplan', withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: QuitPlan }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/allforms', async (req, res) => {
    try {

      const allForms = await DailyForm.findAll();

      const stories = allForms.map((form) => form.get({ plain: true }));
  
      res.render('calendar', { stories });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/form/:id', async (req, res) => {
    try {
      const formData = await DailyForm.findByPk(req.params.id);
  
      const thisForm = formData.get({ plain: true });
  
      res.render('dailyform', {
        ...thisForm,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {

    if (req.session.logged_in) {
      res.redirect('/profilequitplan');
      return;
    }
  
    res.render('login');
  });



  module.exports = router;
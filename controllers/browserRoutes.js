const router = require("express").Router();
const { User, DailyForm, QuitPlan, UserStories } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const allStories = await UserStories.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });

    const randomIndex = Math.floor(Math.random() * (allStories.length - 3));
    const stories = allStories
      .slice(randomIndex, randomIndex + 3)
      .map((story) => story.get({ plain: true }));
    res.render("homepage", { stories, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/stories", async (req, res) => {
  try {
    const allStoriesTwo = await UserStories.findAll({});

    const storiesTwo = allStoriesTwo.map((story) => story.get({ plain: true }));
    res.render("stories", { storiesTwo, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: QuitPlan }],
    });
    console.log(userData);
    const user = userData.get({ plain: true });

    const dailyForm = await DailyForm.findAll({
      where: {user_id: req.session.user_id}
    })
     const serializeDailyForm = dailyForm.map((form) => form.get({ plain: true }));


    console.log(dailyForm);

    

    res.render("profile", {
      ...user, // use serialize data pass it along
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/allforms", async (req, res) => {
  try {
    const allForms = await DailyForm.findAll();

    const stories = allForms.map((form) => form.get({ plain: true }));

    res.render("calendar", { stories });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/form/:id", async (req, res) => {
  try {
    const formData = await DailyForm.findByPk(req.params.id);

    const thisForm = formData.get({ plain: true });

    res.render("dailyform", {
      ...thisForm,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/scared", async (req, res) => {
  try {
    res.render("scared");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new-plan", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { include: ["name"] },
    });
    const user = userData.get({ plain: true });
    res.render("quitPlan", { user, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//   router.get('/graph/:id', (req, res) => {
//     QuitPlan.findByPk(req.params.id).then(user => {
//         const howManyCigs = user.howManyCigs;
//         const cigPrice = user.cigPrice;

//         // chart.js needs a "canvas" to render the graph
//         // <canvas id='myChart'> </canvas> to wrap the graph
//         const ctx = document.getElementById('myChart').getContext('2d');
//         // this is where you create a graph with the data
//         const chart = new Chart(ctx, {
//             type: 'bar',
//             data: {
//                 // x and y axis?
//                 labels: ['Cigarettes per week', 'Money spent per week'],
//                 datasets: [{
//                     // label of the data set / graph
//                     label: 'Weekly use and cost of cigarettes',
//                     data: [howManyCigs, cigPrice],
//                     backgroundColor: [
//                         'rgba(255, 99, 132, 0.2',
//                         'rgba(54, 162, 235, 0.2)'
//                     ],
//                     borderColor: [
//                         'rgba(255, 99, 132, 1)',
//                         'rgba(54, 162, 235, 1)'
//                     ],
//                     borderWidth: 1
//                 }]
//             },
//             options: {
//                 scales: {
//                     y: {
//                         beginAtZero: true
//                     }
//                 }
//             }
//         });
//         // this is to render the data to the handlebar
//         res.render('graph-card'), {
//             howManyCigs: howManyCigs,
//             cigPrice: cigPrice,
//             chart: chart.toBase64Image()
//         }

//     })

// })

module.exports = router;

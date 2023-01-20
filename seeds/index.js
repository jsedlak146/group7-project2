const sequelize = require('../config/connection');
const { UserStories, User, DailyForm } = require('../models');
const dailyFormData = require('./dailyFormSeeds.json');
const userStoriesData = require('./userStorySeeds.json');
const userData = require('./userSeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
    await UserStories.bulkCreate(userStoriesData)
    console.log("User Stories Seeded")
    
    await User.bulkCreate(userData)
    console.log("users created")
    await DailyForm.bulkCreate(dailyFormData)
    console.log("user daily forms seeded!!!")



  process.exit(0);
};

seedDatabase();
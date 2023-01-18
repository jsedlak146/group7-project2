const sequelize = require('../config/connection');
const { UserStories} = require('../models');

const userStoriesData = require('./userStorySeeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
    await UserStories.bulkCreate(userStoriesData)
    console.log("User Stories Seeded")


  process.exit(0);
};

seedDatabase();
const User = require('./User');
const QuitPlan = require('./quitPlan');
const DailyForm = require('./dailyForm');
const UserStories = require('./userStories');


User.hasOne(QuitPlan, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',

});
  
QuitPlan.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(DailyForm, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',

});
  
DailyForm.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(UserStories, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL',

});
  
UserStories.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, QuitPlan, DailyForm, UserStories };
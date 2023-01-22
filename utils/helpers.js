module.exports = {
    capitalize: (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    },
    // helper for if statement in profile.handlebars
    isEqual: (value1, value2) =>  {
        return value1 == value2;
    }
}


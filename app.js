const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log("🚀 ~ file: app.js:5 ~ newItems:", newItems)

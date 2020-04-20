const division = require('./data/divisions.json');

exports.showAllDivisions = function (req, res) {
  res.json(division);
};
/**
 * This will take a single name and
 * display the single division
 * And their contents
 * */

exports.showSingleDivision = function (req, res) {
  let number = 0;
  let exists = false;
  division[2].data.forEach((item, index) => {
    if (item.name.toLowerCase() === req.params.division.toLowerCase()) {
      number = index;
      exists = true;
    }
  });

  let data = { page: 'Does not exists' };

  if (exists) {
    data = division[2].data[number];
  }
  res.json(data);
};

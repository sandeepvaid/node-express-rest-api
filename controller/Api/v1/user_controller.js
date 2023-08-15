const getUser = function (req, res) {
  return res.json({
    message: "Hey I am user",
  });
};
module.exports = {
  getUser,
};

const userDB = require("../../../models/user_model");
const getUser = async function (req, res) {
  const allUsers = await userDB.find({});
  return res.json({
    data: {
      message: "User fetched successfully",
      users: allUsers,
    },
  });
};

const addUser = async function (req, res) {
  try {
    await userDB
      .create(req.body)
      .then((user) => {
        return res.json({
          data: {
            message: "User created successfully",
            user: user,
          },
        });
      })
      .catch((error) => {
        return res.json({
          data: {
            message: "Error while creating user",
            error,
          },
        });
      });
  } catch (err) {
    return res.json({
      data: {
        message: "Error while creating user",
      },
    });
  }
};

const updateUser = async function (req, res) {
  try {
    console.log("Update user", req.params.userId);
    let user = await userDB.findById(req.params.userId);
    console.log("Update user", user);
    user.role = req.body.role;
    user.save();
    return res.json({
      data: {
        message: "User updated successfully",
        user,
      },
    });
  } catch (err) {
    return res.json({
      data: {
        message: "User is not updated ",
        err,
      },
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    let user = await userDB.findById(req.params.userId);
    console.log("delete", user);
    user.deleteOne();
    return res.json({
      data: {
        message: "User deleted successfully",
      },
    });
  } catch (err) {
    return res.json({
      data: {
        message: "User is not deleted ",
        err,
      },
    });
  }
};

module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUser,
};

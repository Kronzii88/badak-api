const serviceEvent = require("../service/event");

/**
 *
 * @param {*} req
 * @param {*} res
 * function for creating event
 */
async function create(req, res) {
  console.log(req.body);
  try {
    let data = await serviceEvent.create(req.body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: "invalid or uncompleted data ",
    });
  }
}

async function getAll(req, res) {
  let data = await serviceEvent.getAll();
  if (!data) {
    res.status(404).json({
      message: "data not found",
    });
  }
  res.status(200).json(data);
}

async function getPublished(req, res) {
  let data = await serviceEvent.getPublished();
  if (!data) {
    res.status(404).json({
      message: "data not found",
    });
  }
  res.status(200).json(data);
}

async function getDrafted(req, res) {}

module.exports = {
  create,
  getAll,
  getPublished,
  getDrafted,
};

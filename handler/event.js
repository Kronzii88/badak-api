const uuid = require("uuid");
const serviceEvent = require("../service/event");
const firebaseStorage = require("../lib/firebase-storage");

/**
 *
 * @param {*} req
 * @param {*} res
 * function for creating event
 */
async function create(req, res) {
  let image_url;

  // const { event_image } = req.file;

  const alloweFileType = ["image/png", "image/jpeg"];
  const splitNameFile = req.file.originalname.split(".");
  const formatFile = splitNameFile[splitNameFile.length - 1];

  if (alloweFileType.includes(req.file.mimetype)) {
    const image = await firebaseStorage.upload(
      req.file.buffer,
      `image/${uuid.v4()}.${formatFile}`
    );

    image_url = image.publicUrl;
    req.body["event_image"] = image_url;
  }

  console.log(req.body);
  console.log(image_url);

  try {
    let data = await serviceEvent.create(req.body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({
      message: "invalid or uncompleted data ",
    });
  }
}

//put
async function publishEvent(req, res) {
  let data = req.body;
  console.log(data);

  await serviceEvent.publishEvent(data);
  if (!data)
    return res.status(404).json({
      message: "data not found",
    });

  return res.status(200).json(data);
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
  await serviceEvent.getPublished();
  // if (!data) {
  //   res.status(404).json({
  //     message: "data not found",
  //   });
  // }
  // res.status(200).json(data);
}

async function getDrafted(req, res) {
  let data = await serviceEvent.getDrafted();
  if (!data) {
    res.status(404).json({
      message: "data not found",
    });
  }

  res.status(200).json(data);
}

async function getById(req, res) {
  let data = await serviceEvent.getById(req.params.event_id);
  if (!data)
    return res.status(404).json({
      message: "data not found",
    });

  res.status(200).json(data);
}

// put
async function update(req, res) {}

//put
async function addTicket(req, res) {}

module.exports = {
  create,
  getAll,
  getPublished,
  getDrafted,
  getById,
  publishEvent,
};

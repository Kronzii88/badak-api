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

async function getDrafted(req, res) {
  let data = await serviceEvent.getDrafted();
  if (!data) {
    res.status(404).json({
      message: "data not found",
    });
  }

  res.status(200).json(data);
}

//for upload image
async function uploadImage(req, res) {
  const alloweFileType = ["image/png", "image/jpeg"];
  const splitNameFile = req.file.originalname.split(".");
  const formatFile = splitNameFile[splitNameFile.length - 1];

  if (alloweFileType.includes(req.file.mimetype)) {
    const image = await firebaseStorage.upload(
      req.file.buffer,
      `image/${uuid.v4()}.${formatFile}`
    );

    // todo something
    // res.status(200).json({
    //   result: {
    //     image: image.image,
    //     url: image.publicUrl,
    //   },
    // });

    return res.json({
      url: image.publicUrl,
    });
  }

  res.status(400).json({
    status: 400,
    message: "upload file failed",
  });
}

module.exports = {
  create,
  getAll,
  getPublished,
  getDrafted,
  uploadImage,
};

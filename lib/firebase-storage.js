var admin = require("firebase-admin");
const { format } = require("util");

var serviceAccount = require("../creds/firebase_storage_creds.json"); // put your credentials here

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://project-badak.appspot.com",
});

async function upload(file, destination) {
  const bucket = admin.storage().bucket();
  const bucketFile = bucket.file(destination); // images/profile.png

  await bucketFile.save(file);

  public = await bucketFile.makePublic();

  return {
    image: public[0].object,
    publicUrl: format(
      `https://storage.googleapis.com/${public[0].bucket}/${public[0].object}`
    ),
  };
}

module.exports = {
  upload,
};

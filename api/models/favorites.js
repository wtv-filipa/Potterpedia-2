//Parte da BD
const getCollection = require("../utils/getCollection");
const getDocumentFromCollection = require("../utils/getDocumentFromCollection");

const COLLECTION_NAME = "favorites";

module.exports = {
  get: async (userId, nameCharacter) => {
    const coll = getCollection(COLLECTION_NAME);

    const query = await coll
      .where("userId", "==", userId)
      .where("nameCharacter", "==", nameCharacter)
      .get();

    if (query.empty) {
      return;
    }

    return { ...query.docs[0].data(), id: query.docs[0].id };
    /*const docRef = getDocumentFromCollection(coll, id);

    const doc = await docRef.get();
    const data = doc.data();

    if (!data) {
      return false;
    }

    return { ...data, id: doc.id };*/
  },
  create: async (fav) => {
    const coll = getCollection(COLLECTION_NAME);
    const docRef = await coll.add(fav);

    return { id: docRef.id, ...fav };
  },
  remove: async (userId, nameCharacter) => {
    const coll = getCollection(COLLECTION_NAME);
    const query = await coll
      .where("userId", "==", userId)
      .where("nameCharacter", "==", nameCharacter)
      .get();

    if (query.empty) {
      return;
    }

    await query.docs[0].ref.delete();
    return true;
  },
};

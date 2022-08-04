//Parte da BD
const getCollection = require("../utils/getCollection");
const getDocumentFromCollection = require("../utils/getDocumentFromCollection");

const COLLECTION_NAME = "comments";

module.exports = {
  get: async (id) => {
    if (!id) {
      throw new Error("An ID must be provided");
    }

    const coll = getCollection(COLLECTION_NAME);
    const docRef = getDocumentFromCollection(coll, id);

    const doc = await docRef.get();
    const data = doc.data();

    if (!data) {
      return false;
    }

    return { ...data, id: doc.id };
  },
  getAll: async () => {
    const coll = getCollection(COLLECTION_NAME);
    const query = await coll.get();

    return query.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  },
  create: async (body) => {
    if (!body) {
      throw new Error("A body must be provided");
    }

    const coll = getCollection(COLLECTION_NAME);

    const comment = {
      ...body,
      timestamp: new Date().getTime(),
    };
    const docRef = await coll.add(comment);

    return { id: docRef.id, ...comment };
  },
  update: async (id, body) => {
    if (!id) {
      throw new Error("An ID must be provided");
    }

    if (!body) {
      throw new Error("A body must be provided");
    }

    const coll = getCollection(COLLECTION_NAME);
    const docRef = getDocumentFromCollection(coll, id);

    await docRef.update(body);
    const doc = await docRef.get();
    const data = doc.data();

    return { ...data, id: doc.id };
  },
  remove: async (id) => {
    if (!id) {
      throw new Error("An ID must be provided");
    }

    const coll = getCollection(COLLECTION_NAME);
    const doc = getDocumentFromCollection(coll, id);

    await doc.delete();
    return true;
  },
};

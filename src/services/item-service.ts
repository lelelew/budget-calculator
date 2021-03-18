import { Item } from "../types/item";
import firebase from "firebase/app";

import "firebase/firestore";
import { firebaseInitialize } from "../util/firebase";

/**
 * Loads the set of available items from
 * the firebase firestore collection `items`.
 *
 * From Firebase documentation on how to read data: https://firebase.google.com/docs/firestore/quickstart#web_1
 *
 * @returns array of Items
 */
export async function getItems() {
  const app = firebaseInitialize();
  const db = firebase.firestore(app);
  const itemsRef = db.collection("items");
  const snapshot = await itemsRef.get();
  const items: Item[] = [];
  snapshot.forEach((doc) => {
    // console.log(doc.id, "=>", doc.data());
    // snapshot/doc are firebase objects that
    // we're mapping to our Item type
    items.push(doc.data() as Item);
  });
  return items;
}

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../config";
import { getDatabase, ref, onValue } from "firebase/database";
import { Exercise } from "../types";

initializeApp(firebaseConfig);

class Firebase {
  getExercises = (
    setterMethod: React.Dispatch<React.SetStateAction<Exercise[]>>
  ) => {
    const db = getDatabase();
    const reference = ref(db, "/");
    let data = null;

    onValue(reference, (snapshot) => {
      setterMethod(snapshot.val());
    });
  };
}

export default new Firebase();

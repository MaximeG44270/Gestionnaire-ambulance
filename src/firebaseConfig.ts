// src/firebaseConfig.ts
import {initializeApp} from "firebase/app";
import {doc, getFirestore, setDoc} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const createAdminUser = async () => {
  try {
    await setDoc(doc(db, "utilisateurs"), {
      email: "gilbert.maxime01@gmail.com",
      firstName: "Maxime",
      lastName: "GILBERT",
      role: "admin",
      createdAt: new Date().toISOString(),
      isActive: true,
      permissions: {
        createUser: true,
        editUser: true,
        deleteUser: true,
        viewDashboard: true,
        managePatients: true,
        manageVehicles: true,
        manageSchedules: true
      }
    });
    console.log("Compte administrateur créé avec succès !");
  } catch (error) {
    console.error("Erreur lors de la création du compte :", error);
  }
};

createAdminUser();

export {db, auth};
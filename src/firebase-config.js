import * as firebase from "firebase/app";
import {
  firebaseConfig
} from "./config";

import "firebase/firebase-app";
import "firebase/firebase-database";
import "firebase/analytics"

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.database();
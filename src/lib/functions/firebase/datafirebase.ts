import { firebaseApp } from "$lib/functions/firebase/firebase"
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import { browser } from "$app/environment";

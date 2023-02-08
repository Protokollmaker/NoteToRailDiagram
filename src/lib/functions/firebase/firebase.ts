import { firebaseConfig } from "$lib/stores/firebaseConfig";
import { initializeApp, getApps, getApp } from "firebase/app";
import { browser } from "$app/environment";

export const firebaseApp = browser && (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
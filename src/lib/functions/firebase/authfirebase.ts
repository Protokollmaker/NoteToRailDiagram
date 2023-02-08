// @ts-nocheck
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "$lib/functions/firebase/firebase";
import { user } from "$lib/stores/user";
import { browser } from "$app/environment";

export function login(email: string, password: string) {
    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}

export async function  logout() {
    const auth = getAuth(firebaseApp);
    signOut(auth).then(() => {
        user.set(undefined);
    });
}

if (browser) {
    const auth = browser && getAuth(firebaseApp);
    onAuthStateChanged(auth, (newUser) => {
        user.set(newUser);
    });
}
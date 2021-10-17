import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseInitAuth from "../Firebase/Firebase.init";

firebaseInitAuth();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [address, setAdress] = useState("");

  const auth = getAuth();

  const signInUsingGogle = () => {
    setIsLoading(false);
    const gogleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, gogleProvider);
  };
  // email Create Login
  const createEmailUser = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateProfileEmail = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((res) => {
        setUser(res.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // sign in with email
  const signInWithEmail = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setIsLoading(false);
        setUser({});
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  return {
    user,
    signInUsingGogle,
    isLoading,
    error,
    logOut,
    createEmailUser,
    setIsLoading,
    setError,
    setUser,
    setAdress,
    updateProfileEmail,
    signInWithEmail,
    address,
  };
};

export default UseFirebase;

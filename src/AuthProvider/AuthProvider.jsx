import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider();

  // user create email account
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // user sign in system
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }
  // google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  }

  // Logout User
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }
  // create name and photo updated url set up
  const updateProfileAndPhoto = (currentUser, name, photo) => {
    setLoading(true)
    return updateProfile(currentUser, {
      displayName: name, photoURL: photo
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser, 'authstate change theke')
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe();
    }

  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    updateProfileAndPhoto,
    signInUser,
    googleSignIn,
    logOut,

  }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';
import { app } from '../../Firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    });
  }

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
            // here we can use jwt token and axis project by project to do authentication storang system
            // if (currentUser) {
            //     axios.post('http://localhost:5000/jwt', { email: currentUser.email })
            //       .then(data => {
            //         localStorage.setItem('access-token', data.data.token);
            //         setLoading(false);
            //       });
            //   } else {
            //     localStorage.removeItem('access-token');
            //   }
    });

    return () => {
      return unsubscribe();
    }
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    googleSignIn,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

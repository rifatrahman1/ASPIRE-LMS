import React, { createContext, useEffect, useState } from 'react';
import {
      GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
      signOut, updateProfile,
} from 'firebase/auth'
import auth from '../Firebase/Firebase.config';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
      const [user, set_user] = useState(null);
      const [loading, set_loading] = useState(true);

      // registration
      const create_user = (email, password) => {
            set_loading(true);
            return createUserWithEmailAndPassword(auth, email, password); 
      }

      // signIn
      const sign_in = (email, password) => {
            set_loading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }

      // google log in
      const signin_with_google = () => {
            set_loading(true);
            return signInWithPopup(auth, googleProvider);
      }

      // user log out
      const log_out = async () => {
            set_loading(true);
            return signOut(auth);
      }

      // update user profile
      const update_user_profile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo,
            })
      }

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
                  console.log('CurrentUser--->', currentUser);
                  if (currentUser?.email) {
                        set_user(currentUser);
                  }
                  set_loading(false);
            })
            return () => {
                  return unsubscribe();
            }
      }, [])

      const auth_info = {
            user,
            set_user,
            loading,
            set_loading,
            create_user,
            sign_in,
            signin_with_google,
            log_out,
            update_user_profile
      }

      return (
            <AuthContext.Provider value={auth_info}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;
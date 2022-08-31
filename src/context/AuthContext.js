import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {setDoc,doc} from 'firebase/firestore'

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    function signUp(email, password) {
      createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, 'users', email), {
          savedShows: []
      })
    }
  


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      });

    return (
        <AuthContext.Provider value={{ signUp, user }}>
      {children}
    </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export function UserAuth() {
    return useContext(AuthContext);
  }
  
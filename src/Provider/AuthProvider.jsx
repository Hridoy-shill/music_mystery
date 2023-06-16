import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const google = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create new user
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // create googleUser
    const createGoogleUser = () =>{
        setLoading(true)
        return signInWithPopup(auth, google)
    }

    //Login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut user
    const LogOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log(currentUser);

            // get and set token
            if(currentUser){
                axios.post('https://the-music-mystrey-server.vercel.app/jwt', {email: currentUser.email})
                .then(data =>{
                    // console.log(data);
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }


            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createNewUser,
        createGoogleUser,
        loginUser,
        LogOutUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
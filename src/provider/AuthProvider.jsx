/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authContex = createContext();

const AuthProvider = ({children}) => {
 const [user, setUser] = useState([])
 const [loading, setLoading] = useState(true);
//  console.log(user)


 const emailSignOutHandle = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   
 }

 const signInHandle = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

 }

 const UpdateProfile = (dataUpdate) =>{

    return updateProfile(auth.currentUser, dataUpdate);

 }

 const LogOut = ()=>{
    signOut(auth)
    setLoading(true)
 }

 useEffect( ()=>{

    const unsubscrib = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false)
    })

    return ()=>{
        unsubscrib();
    }

 },[])


const authInfro = {
    user,
    setUser,
    emailSignOutHandle,
    LogOut,
    signInHandle,
    loading,
    UpdateProfile
}
   

    return (
        <authContex.Provider value={authInfro}>
            {children}
            
        </authContex.Provider>
    );
};

export default AuthProvider;
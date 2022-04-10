import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.init';

const LoginWithGoogle = () => {
   const auth = getAuth(app);
   const provider = new GoogleAuthProvider();

   const [user , setUser] = useState({});
   //set value fire this button
   useEffect(()=>{
      onAuthStateChanged(auth , user =>{
         setUser(user)
      })
   })
   // sing out
   const GoogleSignOut = () =>{
      signOut(auth)
      .then(result => {
         setUser('logout successfully')
      }).catch(error =>{
         setUser('logOut unsuccessful');
      })
   }
   // click
   const clickeHandealer = () =>{
      signInWithPopup(auth , provider)
      .then(result => {
         setUser('login successfully');
         setUser(result.user)
      }).catch(error =>{
         setUser('Login fail')
      })
   }
   return {user , setUser , clickeHandealer , GoogleSignOut};
};
export default LoginWithGoogle;
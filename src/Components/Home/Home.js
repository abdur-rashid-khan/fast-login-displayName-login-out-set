import React from 'react';
import LoginWithGoogle from '../Hooks/LoginWithGoogle';
import './Home.css'
const Home = () => {
   const {loginBtn} = LoginWithGoogle();
   // const {user , setUser} = LoginWithGoogle({})
   return (
      <div>
         <button onClick={loginBtn} className='btn'>Login with Google</button>
      </div>
   );
};

export default Home;
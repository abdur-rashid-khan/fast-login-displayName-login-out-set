import React from 'react';
import LoginWithGoogle from '../Hooks/LoginWithGoogle';
import './Home.css'
const Home = () => {
   const {clickeHandealer , user ,} = LoginWithGoogle();
   // const {user , setUser} = LoginWithGoogle({})
   return (
      <div>
         <button onClick={clickeHandealer} className='btn'>Login with Google</button>
      </div>
   );
};

export default Home;
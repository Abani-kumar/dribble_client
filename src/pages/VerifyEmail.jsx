import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Verification from '../components/Verification';
import { useSearchParams } from 'react-router-dom';


const VeriFyEmail = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  if(!email) return;
  return (
    <div className=' w-[100vw] min-h-[100vh] flex flex-col '>
      <NavBar/>
      <div className=' flex-1'>
        <Verification email={email}/>
      </div>
      <Footer/>
    </div>
  )
}

export default VeriFyEmail;
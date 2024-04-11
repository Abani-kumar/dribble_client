import React from 'react'
import { Link } from 'react-router-dom'
import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <div className=' w-full  min-h-[100vh] flex justify-between'>
     <div className=" max-md:hidden  min-h-[100vh] w-[40%] bg-center bg-cover bg-no-repeat">
      <video src='https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515' muted autoPlay loop playsInline className='object-cover h-full w-full'/>
     </div>
     <div className=' max-md:w-[100%] w-[60%] '>
       <div className=' p-3 flex flex-col gap-10'>
        <p className=' w-full flex justify-end max-sm:justify-center'>Alrady a member? <Link to='/signin' className=' text-blue-500'>Sign in</Link></p>
        <div className=' w-full flex justify-center items-center'>
        <SignupForm/>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Signup
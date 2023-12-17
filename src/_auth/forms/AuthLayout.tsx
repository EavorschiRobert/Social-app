import React from 'react'
import { Outlet, Navigate} from 'react-router-dom'


const AuthLayout = () => {

  const isAuthenticated = false;

  return (
    <>
    {isAuthenticated ? 
    (<Navigate to="/"/>) : 
    (
    <>
      <section className="flex flex-1 items-center flex-row justify-between">
        <section className="pl-5 pr-5 pl-20">
          <Outlet/>
        </section>
        <section className="flex-end">
          <img src='/assets/images/side-img.svg'
              alt='logo'
              className='md-hidden xl:block h-screen  object-cover bg-no-repeat content-end'
            ></img>
        </section>
      </section>
      
    </>
    )}
    </>
  )
}

export default AuthLayout
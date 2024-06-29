import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from "../assets/Logo.png"

const SignUp = () => {

    const navigate = useNavigate()

    const gotoSignIn = () => {
        navigate("/signin")
    }


  return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-[8rem] w-[8rem]" src={Logo} alt="Your Company"/>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6">
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div class="text-sm">
                    <a href="#" class="font-semibold text-navBarBgColor hover:text-indigo-500">Forgot password?</a>
                </div>
                </div>
                <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div  className='hover:bg-black mt-5 bg-navBarBgColor text-white text-center p-3 rounded cursor-pointer' 
                onClick={gotoSignIn}
                >
                    <button>Sign Up</button>
            </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
            Already a member?
            <button onClick={gotoSignIn} class="font-semibold leading-6 text-navBarBgColor hover:text-indigo-500">Sign In</button>
            </p>
            
        </div>
        </div>
  )
}

export default SignUp
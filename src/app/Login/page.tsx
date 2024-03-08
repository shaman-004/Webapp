// components/LoginForm.js
'use client'
import Link from 'next/link';
import { useState } from 'react';
// import { useRouter } from 'next/router';
const LoginPage = () => {
  

const[username, setUsername] = useState('');
const[password,setPassword]=useState('')  ;

const handleSubmit=async(e:any)=>{
  e.preventDefault();
  console.log('Submitting form with username:', username, 'and password:', password);
  try {
    const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'username': username,
            'password': password,
        }),
    });

    if (response.ok) {
        console.log('Data sent successfully!');
    } else {
        console.error('Failed to send data.');
    }
} catch (error) {
    console.error('Error:', error);
}
// router.push('/')
};


  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="w-full sm:w-1/2 bg-cover bg-center md:flex h-60 sm:h-full" style={{ backgroundImage: `url('apple.jpg')` }}>
        {/* Add any other content you want to display on the left side, such as a logo or welcome message */}
      </div>
      <div className="items-center min-h-screen flex justify-center p-4 sm:p-10 lg:p-20 w-full sm:w-1/2 bg-black">
        <form  className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-96">
          <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Sign In</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border-2 hover:border-black shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 hover:border-black shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline items-center w-full shadow-lg  hover:shadow-gray-700 rounded-lg "
              type="button"
              onClick={handleSubmit}
              
              
            >
              Sign In
            </button>
          </div>
        </form>
        {/* Uncomment the section below if you want to display the registration link */}
        {/* <p className="text-white text-center text-sm mt-4">
          Do not have an account?{' '}
          <Link href="/Register">
            <a className="underline hover:text-blue-300">Register</a>
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default LoginPage;

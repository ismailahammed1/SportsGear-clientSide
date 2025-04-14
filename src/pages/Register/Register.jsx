import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';
const Register = () => {
  const {createUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault();

   
        const email = e.target.email.value;
       
        const password = e.target.password.value;
    
        console.log("Logging in with:",name, email, password,);
        createUser(email,password)
        .then(result=>{
            console.log(result);
            Swal.fire({
              icon: 'success',
              title: 'Registration Successful',
              text: 'Welcome to SportsGear!',
              timer: 1500,
              showConfirmButton: false,
            });
//Navigate('/');
            
        })
        .catch(error=>{
            console.log(error);
            Swal.fire({
              icon: 'error',
              title: 'Registration Failed',
              text: error.message || 'Something went wrong.',
            });
        })
       
    }
  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Register</h2>
      <form onSubmit={handleRegister} className="space-y-6">
        {/* <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div> */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        {/* <div>
          <label htmlFor="photoURL" className="block text-sm font-medium text-gray-300">
            Photo URL (optional)
          </label>
          <input
            type="url"
            name="photoURL"
            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div> */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <p className="mt-1 text-xs text-gray-400">
            Must be 6+ characters with uppercase and lowercase letters
          </p>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors duration-300"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-400">
        Already have an account?{' '}
        <Link to="/login" className="text-yellow-400 hover:underline">
          Login
        </Link>
      </p>
    </div>
  </div>
);
};

export default Register
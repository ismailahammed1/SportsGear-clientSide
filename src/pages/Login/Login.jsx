import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { AuthContext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || '/';

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password);
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login failed:", error.message);
      setError(error.message);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await googleSignIn();
      await Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Google Login Successful',
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Google login failed:", error.message);
      setError(error.message);
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Google Login Failed',
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Login</h2>
        
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors duration-300"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-md hover:bg-red-600 transition-colors duration-300"
            disabled={loading}
          >
            <FaGoogle className="mr-2" /> {loading ? 'Processing...' : 'Login with Google'}
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-yellow-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
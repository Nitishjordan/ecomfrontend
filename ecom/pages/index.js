import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-4 bg-white rounded shadow">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-cyan-800 bg-blue-500 rounded-full hover:bg-blue-600"
            >
              Log in
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </div>
        <div className="mt-4">
          <p className="text-center">Or login with:</p>
          <div className="flex justify-center mt-2">
            <button className="mr-2 px-4 py-2 text-white bg-red-600 rounded-full" >
              Gmail
            </button>
            <button className="px-4 py-2 text-white bg-blue-400 rounded-full">
              Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

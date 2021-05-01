import React from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context';

import axios from '../utils/axios';

export default function Admin() {
  const authContext = React.useContext(AuthContext);

  const history = useHistory();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/auth/login', {
        email,
        password,
      });
      const data = response.data;
      authContext.setLoggedIn(true);
      authContext.setToken(data.token);
      authContext.setRefreshToken(data.refreshToken);
      if (response.status === 200) {
        history.push('/adminpanel');
      }
    } catch (error) {
      // TODO: handle unauthorized status
      console.error(error.response);
    }
  }

  React.useEffect(() => {
    console.log(authContext);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className='flex justify-center'>
        <h1 className='font-semibold pt-5'>Sign in to Admin Panel</h1>
      </div>
      <div className='flex justify-center'>
        <div className='space-y-4 mt-20'>
          <div className='flex flex-col'>
            <label>Email</label>
            <input
              className='rounded-md border border-green-800 focus:border-green-900 w-96 p-2 text-black'
              type='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label>Password</label>
            <input
              className='rounded-md border border-green-800 focus:border-green-900 w-96 p-2 text-black'
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex justify-center'>
            <button
              className='rounded-md bg-green-700 text-white p-2 hover:bg-green-600'
              onClick={(e) => handleSignIn(e)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

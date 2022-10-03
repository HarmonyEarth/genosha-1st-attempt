import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logUserIn } from '../../rtk/slice/userState';

const LogIn = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const noReload = (e) => {
    e.preventDefault();
    dispatch(logUserIn());
    navigate('/select');
  };

  return (
    <>
      <form onSubmit={(e) => noReload(e)}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" required autoComplete="off" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" required autoComplete="off" />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default LogIn;

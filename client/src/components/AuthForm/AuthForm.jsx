import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Btn from '../../widgets/Btn/Btn';
import axiosInstance, { setAccessToken } from '../../axiosInstance';

export default function AuthForm({ title, type, setUser }) {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axiosInstance.post(`api/auth/${type}`, inputs);
    setUser(response.data.user);
    setAccessToken(response.data.accessToken);
    navigate('/');
  };

  return (
    <form onSubmit={submitHandler} className='form'>
      <h3>{title}</h3>

      {type === 'signin' && (<>
          <input
            onChange={changeHandler}
            type='email'
            name='email'
            value={inputs?.email}
            placeholder='Эл.почта'
          />
          <input
            onChange={changeHandler}
            type='password'
            name='password'
            value={inputs?.password}
            placeholder='Пароль'
          />
        </>
      )}
      {type === 'signup' && (
        <>
          <input
            onChange={changeHandler}
            name='username'
            value={inputs?.username}
            placeholder='Имя пользователя'
          />
          <input
            onChange={changeHandler}
            type='email'
            name='email'
            value={inputs?.email}
            placeholder='Эл.почта'
          />
          <input
            onChange={changeHandler}
            type='password'
            name='password'
            value={inputs?.password}
            placeholder='Пароль'
          />
        </>
      )}
      {type === 'signin' && <button text='Вход' color='#293990'>Вход</button> }
      {type === 'signup' && <button text='Регистрация' color='#293990'>Регистрация</button>}
    </form>
  );
}

import { Link } from 'react-router-dom';
import axiosInstance, { setAccessToken } from '../../axiosInstance';

export default function Header({user, setUser,isLoading}) {

  const signOutHandler =async() => {
    const response = await axiosInstance.get(`api/auth/logout`)
    if (response.status === 200) {
      setUser();
      setAccessToken('');
  }
}
console.log(user);

console.log(user?.email);
  return (
    <div className='header'>
      <div className='header-left-group'>
        <Link to='/'>Главная</Link>
      </div>
      {user?.email ? ( <div className='header-right-group'>
        <Link to='/#'>{user?.username}</Link>
        <Link onClick={signOutHandler}>Выход</Link>
      </div>) : (<div className='header-right-group'>
        <Link to='/signup'>Регистрация</Link>
        <Link to='/signin'>Вход</Link>
      </div>)}
      
    </div>
  );
}

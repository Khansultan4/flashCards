import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-left-group'>
        <Link to='/'>Главная</Link>
      </div>
      <div className='header-right-group'>
        <Link to='/signup'>Регистрация</Link>
        <Link to='/signin'>Вход</Link>
      </div>
    </div>
  );
}

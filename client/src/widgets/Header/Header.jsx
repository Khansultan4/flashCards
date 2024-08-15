import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <Link to='/'>Главная</Link>
      <Link to='/tasks'>Задачи</Link>
    </div>
  );
}

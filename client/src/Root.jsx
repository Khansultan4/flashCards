import Header from './widgets/Header/Header';
import { Outlet } from 'react-router-dom';

export default function Root({user, setUser, isLoading}) {
console.log(user);

  return (
    <>
      <Header user={user} setUser={setUser} isLoading={isLoading}/>
      <Outlet />
    </>
  );
}

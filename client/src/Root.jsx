import Header from './widgets/Header/Header';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

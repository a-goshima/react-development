import UserHeader from './UserHeader';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <div>
      <UserHeader />
      <main className="p-4 bg-green-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;

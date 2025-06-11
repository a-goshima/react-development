import AppHeader from './AppHeader';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <AppHeader />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

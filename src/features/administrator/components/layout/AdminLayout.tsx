import AdminHeader from './AdminHeader';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <main className="p-4 bg-blue-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

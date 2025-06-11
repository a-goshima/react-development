// src/features/administrator/layout/AdminHeader.tsx
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <nav className="space-x-4">
        <Link to="/admin/home" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/" className="hover:underline">
          App
        </Link>
        <Link to="/user" className="hover:underline">
          User
        </Link>
      </nav>
    </header>
  );
};

export default AdminHeader;

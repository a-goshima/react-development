// src/features/user/layout/UserHeader.tsx
import { Link } from 'react-router-dom';

const UserHeader = () => {
  return (
    <header className="bg-green-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">User Page</h1>
      <nav className="space-x-4">
        <Link to="/user/home" className="hover:underline">
          My Page
        </Link>
        <Link to="/" className="hover:underline">
          App
        </Link>
        <Link to="/admin" className="hover:underline">
          Admin
        </Link>
      </nav>
    </header>
  );
};

export default UserHeader;

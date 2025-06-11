// src/features/app/layout/AppHeader.tsx
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">App Portal</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/admin" className="hover:underline">
          Admin
        </Link>
        <Link to="/user" className="hover:underline">
          User
        </Link>
      </nav>
    </header>
  );
};

export default AppHeader;

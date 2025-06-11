import AdminHome from '@/features/administrator/components/AdminHome';
import AdminLayout from '@/features/administrator/components/layout/AdminLayout';
import AppHome from '@/features/app/components/AppHome';
import AppLayout from '@/features/app/components/layout/AppLayout';
import UserLayout from '@/features/user/components/layout/UserLayout';
import UserHome from '@/features/user/components/UserHome';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '', element: <AppHome /> },
        { path: '*', element: <AppHome /> },
        { path: 'home', element: <AppHome /> },
      ],
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        { path: '', element: <AdminHome /> },
        { path: '*', element: <AdminHome /> },
        { path: 'home', element: <AdminHome /> },
      ],
    },
    {
      path: '/user',
      element: <UserLayout />,
      children: [
        { path: '', element: <UserHome /> },
        { path: '*', element: <UserHome /> },
        { path: 'home', element: <UserHome /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

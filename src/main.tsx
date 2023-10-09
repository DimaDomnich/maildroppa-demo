import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/authContext.tsx';
import { RequireAuth } from './auth/guard.tsx';
import Layout from './components/Layout';
import LoginPage from './pages/Login';
import UserPage from './pages/User';
import NotFoundPage from './pages/404';
import './index.css';

const router = createBrowserRouter([
  {
    index: true,
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: '/user',
    element: <RequireAuth>
      <UserPage />
    </RequireAuth>,
  },
  {
    path: '*',
    element: 
      <NotFoundPage />
    ,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </AuthProvider>
  </React.StrictMode>,
)

import { AdminLayout } from 'components/Layout';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export function PrivateRoute(props: any) {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn)
    return (
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<AdminLayout />} />
    </Routes>
  );
}

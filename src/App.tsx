import cityApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App(props: any) {
  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/*" element={<PrivateRoute />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

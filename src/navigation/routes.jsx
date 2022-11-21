import React from 'react';
import { Navigate } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { LoginPage } from '../layouts/Auth';
import { DashBoard } from '../layouts/Dashboard';
import { Employees, HomePage, NotFound } from '../pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DashBoard />}>
        <Route path={'/'} element={<Navigate to={'/home'} replace />} />
        <Route path={'/home'} element={<HomePage />} />
        <Route path={'/dashboard'} element={<Employees />} />
        <Route path={'/inbox'} element={<HomePage />} />
        <Route path={'/products'} element={<HomePage />} />
        <Route path={'/profile'} element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export { router };

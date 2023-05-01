import React from 'react';
import { Routes, Route } from 'react-router-dom';
import links from 'constants/links';

/* Main Scenes */
import Home from '../../scenes/Home';
import Explore from '../../scenes/Explore';
import NotFound from '../../scenes/NotFound';

const MainRoutes = () => (

  <Routes>
    <Route path={links.HOME} element={<Home/>} />
    <Route path={links.EXPLORE} element={<Explore/>} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
);

export default MainRoutes;

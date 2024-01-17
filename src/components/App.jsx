import AboutPage from 'Pages/AboutPage/AboutPage';
import HomePage from 'Pages/HomePage/HomePage';
import PortfolioPage from 'Pages/PortfolioPage/PortfolioPage';
import TourismPage from 'Pages/TourismPage/TourismPage';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="resume" element={<TourismPage />} />
        </Route>
      </Routes>
    </>
  );
};

import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './header/header';
import HomePage from 'pages/homePage';
import TweetPage from 'pages/tweetPage';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tweets" element={<TweetPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

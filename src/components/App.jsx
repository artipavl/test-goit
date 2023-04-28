import { TweetPage } from 'pages/tweetPage';
import { Route, Routes } from 'react-router-dom';
import Header from './header/header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<p>test</p>} />
        <Route path="tweet" element={<TweetPage />} />
      </Routes>
    </>
  );
};

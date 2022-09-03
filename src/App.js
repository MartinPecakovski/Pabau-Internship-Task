import { Routes, Route } from 'react-router-dom';

import Navigation from './pages/navigation/navigation.component';
import Home from './pages/home/home.component';
import PastLaunches from './pages/past-launches/past-launches.component';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='past-launches/*' element={<PastLaunches />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
};

export default App;

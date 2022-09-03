import { Routes, Route } from 'react-router-dom';
import LaunchDetails from '../../components/launch-details/launch-details.component';
import LaunchItem from '../../components/launch-item/launch-tem.component';

import Launches from '../../components/launches/launches.component';

const PastLaunches = () => {
  return (
    <Routes>
      <Route index element={<Launches />} />
      <Route path=':launchId' element={<LaunchDetails />} />
    </Routes>
  );
};

export default PastLaunches;

import { Route, Routes } from 'react-router-dom';

import { Artists, Home } from './pages';
import { Searchbar, Sidebar, TopPlay } from './components';

const App = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
      <Searchbar />

      <div className="px-6 flex xl:flex-row flex-col-reverse">
        <div className="flex-1 pb-10 h-[90vh] overflow-y-scroll hide-scrollbar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
        </div>
        <TopPlay />
      </div>

    </div>
  </div>
);

export default App;

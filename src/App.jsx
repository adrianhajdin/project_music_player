import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, TopPlay } from './components';
import { ArtistDetails, Artists, Home, Search, SongDetails, TopCharts } from './pages';

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
            <Route path="/top-charts" element={<TopCharts />} />

            <Route path="/artists/:id" element={<ArtistDetails />} />
            <Route path="/songs/:songid" element={<SongDetails />} />
            <Route path="/search/:searchTerm" element={<Search />} />
          </Routes>
        </div>
        <TopPlay />
      </div>

    </div>
  </div>
);

export default App;

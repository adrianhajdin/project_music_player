import { Searchbar, Sidebar, TopPlay } from './components';
import { Home } from './pages';

const App = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
      <Searchbar />

      <div className="p-6 flex flex-row">
        <div className='flex-1 h-[90vh] pb-10 overflow-y-scroll hide-scrollbar'>
          <Home />
        </div>
        <TopPlay />
      </div>

    </div>
  </div>
);

export default App;

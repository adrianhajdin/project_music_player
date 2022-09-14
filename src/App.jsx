import { Searchbar, Sidebar, TopPlay } from './components';
import { Home } from './pages';

const App = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
      <Searchbar />

      <div className="p-6 flex xl:flex-row flex-col-reverse xl:h-[90vh] h-full overflow-y-scroll hide-scrollbar">
        <div className='flex-1 pb-10'>
          <Home />
        </div>
        <TopPlay />
      </div>

    </div>
  </div>
);

export default App;

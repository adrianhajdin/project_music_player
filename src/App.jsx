import { Sidebar } from './components';

const App = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286] sm:p-12 p-6">
      Something
    </div>
  </div>
);

export default App;
